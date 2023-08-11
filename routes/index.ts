import {Router} from 'express'
import UserRoute from './user_route'

const router = Router()

router.use('/user', UserRoute)

export default router

