import {Router, Request, Response}  from 'express'

const router = Router()

router.get('/get_1', (req : Request, res : Response) => {
    res.send('1')
})

export default router


