import {Router, Request, Response}  from 'express'
import { collections } from '../config/database'
import Semester from '../models/semester'
import Course from '../models/courses'
import User from '../models/user'
import Enrollment from '../models/enrollment'
import Unit from '../models/unit'

const router = Router()

router.get('/get_1', (req : Request, res : Response) => {
    res.send('1')
})

/*--------------------------------------------------------
Description:        This end point return the current semester 
                    name and all the associated courses along
                    with their ID and descriptions.
Request content:    None
Response content:   Semester name, all courses in that semester.
--------------------------------------------------------*/
router.get('/get_current_sem_reg', async (req : Request, res : Response) => {
    const current_date = Date.now()
    const current_sem = await collections.semester?.findOne({
        start_date: {$lte: current_date}, 
        end_date: {$gte: current_date}
    }) as Semester
    console.log(current_sem)

    const current_course = await collections.course?.findOne({semester_id: current_sem.semester_id}) as Course
    console.log(current_course)

    collections.units?.find(
        {unit_id: {$in: current_course.unit_id} }
    ).toArray().then(data => {
        const res_data = {
            sem_name: current_sem.semester_id,
            courses: data
        }
        res.status(200).send({status: "success", res_data})
    })
})

/*--------------------------------------------------------
Description:        This end point return the current semester 
                    name, the current student's name, and all 
                    the courses that the student registered for 
                    in that semester.
Request content:    None
Response content:   Student's first and last name (ID: 32). 
                    Current semester name. All courses' information.
--------------------------------------------------------*/
interface ShortUnit {
    unit_id: string;
    name: string
}

interface ShortEnrollment {
    unit_id: string,
    result: string
}
router.get('/get_current_sem_stu', async (req : Request, res : Response) => {
    try {
        const current_date = Date.now()
        const current_sem = await collections.semester?.findOne({
            start_date: {$lte: current_date}, 
            end_date: {$gte: current_date}
        }) as Semester
        console.log(current_sem)
        
        const current_student = await collections.users?.findOne({user_id: 32}) as User
        //console.log(current_student)

        if (current_student !== null) {
            collections.enrollments?.find(
                {semester_id: current_sem.semester_id, user_id: 32}
            ).toArray().then(data => {
                const res_data = {
                    student_fn: current_student.firstname,
                    student_ln: current_student.lastname,
                    courses: data,
                    start_date: current_sem.start_date,
                    end_date: current_sem.end_date
                }
                res.status(200).send({status: "success", res_data})
            })
        } 

        //Temporary data for demo
        let enrollments : ShortEnrollment[] = []
        let units : string[] = []

        //Get all enrollment records for user ID 32
        collections.enrollments?.find(
            {semester_id: current_sem.semester_id, user_id: 32}
        ).project(
            {unit_id: 1, result: 1, _id: 0}
        ).toArray().then(data => {
            enrollments = data as ShortEnrollment[]
            enrollments.forEach((record) => {
                units.push(record.unit_id)
            })
        }).finally(() => { //Get all courses' names associated with enrollment records of user ID 32
            let courses : Unit[] = []
            collections.units?.find(
                {unit_id: {$in: units}}
            ).project(
                { unit_id: 1, name: 1, _id: 0 }
            ).toArray().then(data => {
                courses = data as Unit[]
            }).finally(() => { //Create a const to hold the response data
                const res_data = {
                    courses: courses,
                    enrollments: enrollments,
                    start_date: current_sem.start_date,
                    end_date: current_sem.end_date
                }
                res.status(200).send({status: "success", res_data})
            })
        })
        
    } catch (e : any) {
        console.log(e)
        res.status(502).send({status: "fail"})
    }
    
}) 

export default router


