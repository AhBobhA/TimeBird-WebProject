import { pbkdf2Sync, randomBytes } from 'crypto'
import {JwtPayload, sign, verify } from 'jsonwebtoken'
import { join } from 'path'
import { readFileSync } from 'fs'
import { Request, Response, NextFunction } from 'express'
import  User from '../models/user'

//Get the private and public key from files
const pathToKey = join(__dirname, '../../', 'id_rsa_priv.pem')
const pathToPubKey = join(__dirname, '../../', 'id_rsa_pub.pem')
const PRIV_KEY = readFileSync(pathToKey, 'utf8')
const PUB_KEY = readFileSync(pathToPubKey, 'utf8')

/*---------------------------------------------------
Description:    this function takes a password string
                and encrypt it using a randomly 
                generated salt.
Output:         the hash and salt of the string
---------------------------------------------------*/
export function genPassword(password : string) : GeneratedPassword {
    let salt : string = randomBytes(32).toString('hex')
    let genHash : string = pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')

    return {
        salt : salt,
        hash : genHash
    }
}

/*---------------------------------------------------
Description:    this function takes a password string
                and encrypt it using a randomly 
                generated salt and compare it to 
                an existing hash.
Output:         whether the two hash match
---------------------------------------------------*/
export function verifyPassword(password : string, hash : string, salt : string) : boolean {
    let hashVerified = pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
    return hash === hashVerified
}

/*---------------------------------------------------
Description:    this function takes a mongoDb ObjectId
                and use it along with the expire date
                as a payload to generate a JWT.
Output:         A JWT containing the object id, the 
                date that the token was generated,
                and the token expiration date.
---------------------------------------------------*/
export function testIssueJWT(user : User) : string {
    const payload = {
        sub: user._id,
        iat: Date.now(),
        exp: Date.now() + 259200000    //259200000 = 3 days
    }

    const signedToken = sign(payload, PRIV_KEY, { algorithm: 'RS256' })

    //Attach the bearer string before the token and return it
    return 'Bearer ' + signedToken
}

/*---------------------------------------------------
Description:    this function takes a jwt string and
                decrypt it.
Output:         If the token is invalid, return null.
                Else, return the decrypt payload
---------------------------------------------------*/
export function verifyJWT(jwtToken : string) : JwtPayload | string | null{
    const tokenParts = jwtToken.split(' ')

    //Invalid token
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer' || tokenParts[1].match(/\S+\.\S+\.\S+/) === null) {
        console.log('Invalid token')
        return null
    }

    //Token verification
    try {
        const payload = verify(tokenParts[1], PUB_KEY, { algorithms: ['RS256'] })
        return payload
    } catch (error) {
        console.log(error)
        return null
    }
}

/*---------------------------------------------------
Description:    This is a middleware function that
                extract the cookie from the request,
                verify the cookie and its expiration 
                date, and put the decrypt token in 
                the request body.
Output:         If the token is invalid, send the 
                corresponding error message. Else,
                attach the token to the request body
                and run the next function.
---------------------------------------------------*/
export function AuthMiddleWare(req : Request, res : Response, next : NextFunction) : any {
    //No token found
    if (req.cookies.JWT_Token === undefined){
        res.status(401).json({ success: false, msg: "Missing JWT Token. You are not authorized to visit this route" });
        return;
    }

    //Verify and decrypt the token in the cookie
    const jwt = verifyJWT(req.cookies.JWT_Token) as JwtPayload

    //Token is invalid
    if (jwt === null) {
        res.status(401).json({ success: false, msg: "Invalid token. You are not authorized to visit this route" })
        return
    }

    //Token expired
    if (jwt.exp!! < Date.now()) {
        res.status(401).json({ success: false, msg: "Expired token. You are not authorized to visit this route" })
        return
    }

    //Attach the token to the request body
    req.body.jwt = jwt
    next()
}