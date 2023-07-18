import {Router} from 'express'
import UserRoute from './user'
import {readUnits} from '../uploads/parseUnit'
import { readUsers } from '../uploads/parseUsers'
import Unit from '../models/Units'
import { collections,collections_2, collections_3, collections_4, collections_5 } from '../config/database'
import User from '../models/user'
import Semester from '../models/Semesters'
import { readSemesters } from '../uploads/parseSemester'
import { readEnrollment } from '../uploads/parseEnrollment'
import { readCourse } from '../uploads/parseCourse'
import Course from '../models/courses'
import Enrollment from '../models/enrollments'


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

router.get('/insertSemester', async (req, res)=>{

    readSemesters(
        async (newRow: Semester)=> {
            const result = await collections_3.semester?.insertOne(newRow)
        }, 
        ()=> res.send("done")
    )

})

router.get('/insertCourse', async (req, res)=>{

    readCourse(
        async (newRow: Course)=> {
            const result = await collections_4.course?.insertOne(newRow)
        }, 
        ()=> res.send("done")
    )

})

router.get('/insertEnrollment', async (req, res)=>{

    readEnrollment(
        async (newRow: Enrollment)=> {
            const result = await collections_5.enrollment?.insertOne(newRow)
        }, 
        ()=> res.send("done")
    )

})
