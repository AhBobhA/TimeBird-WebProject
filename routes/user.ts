import {Router, Request, Response, NextFunction}  from 'express'
import { ObjectId } from 'mongodb'
import { collections } from '../config/database'
import  User from '../models/user'
import * as utils from '../lib/utils'

const router = Router()

/*Test express
router.get('/', (req : Request, res : Response) => {
    res.send('Hello world!')
}) */

/*Test generate password function
router.post('/generatePassword', (req : Request, res : Response) => {
    const generatedPwd = utils.genPassword(req.body.password)

    res.send(generatedPwd)
})*/

/*Test generate a user an insert the record into the database
router.get('/generateTestUser', async (req : Request, res : Response) => {
    try {
        const newUser = new User(
            103444193, "bob", 
            "b0aa8394e814586ffb1b86d3094a71c38004b768b70c0d62052ee80e0c8ccad5f1efbd3e2116531181dd14612a452f770ca0e91c925500173e9672452a7fa525", //Hash
            "b5d8244e7242e81b466fc5786ca3045d54b8b35066328427375030282b76e4a0", //Salt
            "Anh", "Bui", "05/01/1998",
            "male", "The Manor", "admin",
            false, "07/06/2023", "07/06/2023",
            "none"
        )
        const result = await collections.users?.insertOne(newUser)
        result 
            ? res.status(201).send('Successfully inserted Bob into the database')
            : res.status(500).send('Failed to insert a new document to the database')
    } catch (error) {
        console.error(error)
        res.status(400).send('An error has occurred!')
    }
}) */

/*Test verify a user using cookies and JWT
router.post('/verifyUser', async (req : Request, res : Response) => {
    try {
        const reqUsername = req.body.username 
        const existedUser = await collections.users?.findOne({username: reqUsername}) as User
        if (existedUser == null) {
            res.status(401).send('Username or password is incorrect!')
            return
        }

        const reqPassword = req.body.password
        const verifiedPassword = utils.verifyPassword(reqPassword, existedUser.hash, existedUser.salt)

        if (verifiedPassword) {
            const jwt = utils.testIssueJWT(existedUser)
            res.status(200).send({status:'success', jwt})
        } else {
            res.status(401).send('Username or password is incorrect!')
        }
    } catch (error) {
        console.log(error)
        res.status(400).send('An error has occurred!')
    }
})*/

/*router.get('/issueJWT', (req : Request, res : Response, next : NextFunction) => {
    const jwt = utils.testIssueJWT("testUser")
    console.log(jwt)
    res.cookie('JWT_Token', jwt, { httpOnly: true });
    res.send('JWT has been issued')
})

router.get('/issueExpiredJWT', (req : Request, res : Response, next : NextFunction) => {
    const jwt = utils.testIssueExpiredJWT("expiredUser")
    console.log(jwt)
    res.cookie('JWT_Token', jwt, { httpOnly: true });
    res.send('JWT has been issued')
})*/

/*Test the verification middleware
router.get('/verifyJWT', utils.AuthMiddleWare, (req : Request, res : Response, next : NextFunction) => {
    res.status(200).send('You have been authorized.')
}) */

/*--------------------------------------------------------
Description:        This end point extract the cookie from 
                    the request, verify it, and send the 
                    user details in the response if the 
                    cookie is valid.
Request content:    None
Response content:   If the cookie is invalid, send an 
                    error message. Else, send the username 
                    of the user.
--------------------------------------------------------*/
router.get('/getUser', utils.AuthMiddleWare, async (req : Request, res : Response, next : NextFunction) => {
    const id = new ObjectId(req.body.jwt.sub)

    const existedUser = await collections.users?.findOne({_id: id}) as User

    if (!existedUser) {
        res.status(404).send({success: false, msg: 'User not found. You are not authorized to access this route.'})
    } else {
        const username = existedUser.username
        res.status(200).send({success: true, username})
    }
})


export default router


