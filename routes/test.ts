import {Router, Request, Response}  from 'express'
import { collections } from '../config/database'
import Semester from '../models/semester'
import Course from '../models/courses'
import Unit from '../models/unit'

const router = Router()

router.get('/get_1', (req : Request, res : Response) => {
    res.send('1')
})

router.get('/get_current_sem', async (req : Request, res : Response) => {
    const current_date = Date.now()
    const current_sem = await collections.semester?.findOne({
        start_date: {$lte: current_date}, 
        end_date: {$gte: current_date}
    }) as Semester
    console.log(current_sem)

    const current_course = await collections.course?.findOne({semester_id: current_sem.semester_id}) as Course
    console.log(current_course)

    let current_units : Unit[] = []
    collections.units?.find(
        {unit_id: {$in: current_course.unit_id} }
    ).toArray().then(data => {
        current_units = data as Unit[]
    }).finally(() => {
        const data = {
            sem_name: current_sem.semester_id,
            courses: current_units
        }
        res.status(200).send({status: "success", data})
    })
})

export default router


