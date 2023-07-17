import {Router, Request, Response}  from 'express'
import { ObjectId } from 'mongodb'
import { collections } from '../config/database'
import  User from '../models/User'
import * as utils from '../lib/utils'

const router = Router()

router.get('/', (req : Request, res : Response) => {
    res.send('Hello world!')
})

router.post('/generatePassword', (req : Request, res : Response) => {
    const generatedPwd = utils.genPassword(req.body.password)

    res.send(generatedPwd)
})

router.get('/testGenerateUser', async (req : Request, res : Response) => {
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
})

export default router


