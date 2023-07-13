import {Router} from 'express'
import UserRoute from './user'
import {readUnits} from '../uploads/parseUnit'
import { readUsers } from '../uploads/parseUsers'
import Unit from '../models/Units'
import { collections,collections_2 } from '../config/database'
import User from '../models/user'


const router = Router()

router.use('/user', UserRoute)

export default router
router.get('/insertUser', async (req, res)=>{

    readUsers(
        async (newRow: User)=> {
            const result = await collections.users?.insertOne(newRow)
        }, 
        ()=> res.send("done")
    )

})

router.get('/insertUnit', async (req, res)=>{

    readUnits(
        async (newRow: Unit)=> {
            const result = await collections_2.units?.insertOne(newRow)
        }, 
        ()=> res.send("done")
    )

})
