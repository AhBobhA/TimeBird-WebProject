import {Router, Request, Response, NextFunction}  from 'express'
import { ObjectId } from 'mongodb'
import { collections } from '../config/database'
import * as utils from '../lib/utils'
import User from '../models/user'
import Enrollment from '../models/enrollment'
import Semester from '../models/semester'
import Course from '../models/courses'

const router = Router()

/*--------------------------------------------------------
Description:        This end point verify if the user's input 
                    username and password matches a record 
                    in the database. If it does, set a cookie.
                    If it does not, send an error message.
Request content:    Username and password
Response content:   If verify user succussfully, send a cookie
                    containing a JWT token that expires in 3 days.
                    Else, send an error message.
--------------------------------------------------------*/
router.post('/verifyUser', async (req : Request, res : Response) => {
    try {
        const reqUsername = req.body.username 
        const existedUser = await collections.users?.findOne({username: reqUsername}) as User
        if (existedUser == null) {
            res.status(401).send('Username is incorrect!')
            return
        }

        const reqPassword = req.body.password
        const verifiedPassword = utils.verifyPassword(reqPassword, existedUser.hash, existedUser.salt)

        if (verifiedPassword) {
            const jwt = utils.testIssueJWT(existedUser)
            res.cookie('JWT_Token', jwt, { httpOnly: false })
            res.status(200).send({ role: existedUser.roles, username: existedUser.firstname })
        } else {
            res.status(401).send('Password is incorrect!')
        }
    } catch (error) {
        console.log(error)
        res.status(400).send('An error has occurred!')
    }
})

//Verify JWT
router.get('/verifyJWT', utils.AuthMiddleWare, (req : Request, res : Response, next : NextFunction) => {
    const role = req.body.jwt.role
    res.status(200).send({role: role, username: req.body.jwt.username})
})

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

router.get('/testCookie', (req : Request, res : Response) => {
    console.log(req.cookies)
    res.send('OK')
})

/*--------------------------------------------------------
Description:        This end point return the current semester 
                    name and all the associated courses along
                    with their ID and descriptions.
Request content:    None
Response content:   Semester name, all courses in that semester.
--------------------------------------------------------*/
interface EnrollmentCourseID {
    unit_id : string
}

router.get('/get_current_sem_reg', utils.AuthMiddleWare, async (req : Request, res : Response) => {
    const user_id = req.body.jwt.user_id
    const current_date = Date.now()
    const current_sem = await collections.semester?.findOne({
        start_date: {$lte: current_date}, 
        end_date: {$gte: current_date}
    }) as Semester
    console.log(current_sem)

    let enrolled : string[] = []
    await collections.enrollments?.find(
        {semester_id: current_sem.semester_id, user_id: user_id}
    ).project(
        {unit_id: 1, _id: 0}
    ).toArray().then(data => {
        const temp = data as EnrollmentCourseID[]
        temp.forEach(id => 
            enrolled.push(id.unit_id)
        )
    })
    console.log('Enrolled: ' + enrolled)

    const current_course = await collections.course?.findOne({semester_id: current_sem.semester_id}) as Course
    console.log(current_course)

    const filteredCourse = current_course.unit_id.filter(course => !enrolled?.includes(course))
    console.log('Filtered Course: ' + filteredCourse)

    collections.units?.find(
        {unit_id: {$in: filteredCourse} }
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
router.get('/get_current_sem_stu', utils.AuthMiddleWare, async (req : Request, res : Response) => {
    try {
        const user_id = req.body.jwt.user_id
        const current_date = Date.now()
        const current_sem = await collections.semester?.findOne({
            start_date: {$lte: current_date}, 
            end_date: {$gte: current_date}
        }) as Semester
        console.log(current_sem)
        
        let enrollments : ShortEnrollment[] = []
        let units : string[] = []

        collections.enrollments?.find(
            {semester_id: current_sem.semester_id, user_id: user_id}
        ).project(
            {unit_id: 1, result: 1, _id: 0}
        ).toArray().then(data => {
            enrollments = data as ShortEnrollment[]
            enrollments.forEach((record) => {
                units.push(record.unit_id)
            })
        }).finally(() => { //Get all courses' names associated with enrollment records of user ID 32
            let courses : ShortUnit[] = []
            collections.units?.find(
                {unit_id: {$in: units}}
            ).project(
                { unit_id: 1, name: 1, _id: 0 }
            ).toArray().then(data => {
                courses = data as ShortUnit[]
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

/*--------------------------------------------------------
Description:        This end point verify the request to insert
                    an enrollment from the user. If the request is 
                    valid, create a new record and insert it into the database.
Request content:    An array of courses IDs
Response content:   'OK' 
--------------------------------------------------------*/
router.post('/insert_enrollment', utils.AuthMiddleWare, async (req : Request, res : Response) => {
    if (req.body.checks.length > 0) {
        for (let i = 0; i < req.body.checks.length; i++) {
            const existedRecord = await collections?.enrollments?.findOne({
                semester_id: req.body.sem_name,
                unit_id: req.body.checks[i],
                user_id: req.body.jwt.user_id
            })

            if (existedRecord == null) {
                const enrollment = new Enrollment(
                    req.body.checks[i],
                    req.body.sem_name,
                    req.body.jwt.user_id,
                    Date.now(),
                    0,
                    Date.now(),
                    req.body.jwt.user_id
                )
                collections.enrollments?.insertOne(enrollment)
            }
        }
    }
    res.send('OK')
})

export default router


