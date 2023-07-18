import {Router} from 'express'
import UserRoute from './user_route'
import TestRoute from './test'

const router = Router()

router.use('/user', UserRoute)
router.use('/test', TestRoute)

export default router

