import express from 'express'
import { keys } from './config'
import * as routers from './controllers'

const app = express()
const { baseRouter, ...restRouters } = routers

app.use(baseRouter)
Object.values(restRouters).forEach(router => app.use('/api/v1', router))

app.listen(keys.PORT, () => {
	console.log(`Server is running at http://localhost:${keys.PORT}`)
})
