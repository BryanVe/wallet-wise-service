import { Router } from 'express'
import userRouter from './user'

const mainRouter = Router()

mainRouter.use('/users', userRouter)

export { mainRouter }
export { default as baseRouter } from './base'
