import { pbkdf2Sync, randomBytes } from 'crypto'

export function genPassword(password : string) : GeneratedPassword {
    let salt : string = randomBytes(32).toString('hex')
    let genHash : string = pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')

    return {
        salt : salt,
        hash : genHash
    }
}