import express from 'express'
import { keys } from './config'
import { baseRouter, mainRouter } from './controllers'
import { errorHandler } from './utils/error'

const app = express()

app.use(express.json())
app.use(baseRouter)
app.use('/api/v1', mainRouter)

app.use(errorHandler)

app.listen(keys.PORT, () => {
	console.log(`Server is running at http://localhost:${keys.PORT}`)
})
