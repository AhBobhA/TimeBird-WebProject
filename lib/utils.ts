import { pbkdf2Sync, randomBytes } from 'crypto'

export function genPassword(password : string) : GeneratedPassword {
    let salt : string = randomBytes(32).toString('hex')
    let genHash : string = pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')

    return {
        salt : salt,
        hash : genHash
    }
}

export function verifyPassword(password : string, hash : string, salt : string) : boolean {
    let hashVerified = pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
    return hash === hashVerified
}