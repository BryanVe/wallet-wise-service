import express from 'express'
import { keys } from './config'

const app = express()

app.get('/', (_, res) =>
	res.json({
		success: true,
		message: 'Wallet wise service is running',
	})
)

app.listen(keys.PORT, () => {
	console.log(`Server is running at http://localhost:${keys.PORT}`)
})
