import { Router } from 'express'

const router = Router()

router.get('/', (_, res) =>
	res.json({
		success: true,
		message: 'Wallet wise service is running',
	})
)

export default router
