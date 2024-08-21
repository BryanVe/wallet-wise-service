import { Router } from 'express'
import status from 'http-status'
import { validateSchema } from '@/utils/schemas'
import { registerUserDto } from '@/network/schemas'
import { COMMON_MESSAGES, responseBuilder } from '@/network/response'
import { userService } from '@/services'

const router = Router()

router.post('/register', async (req, res) => {
	if (!req.body)
		return res
			.status(status.BAD_REQUEST)
			.json(responseBuilder.error(COMMON_MESSAGES.BODY_REQUIRED))

	const { data, errors } = validateSchema(registerUserDto, req.body)
	if (errors)
		return res.status(status.BAD_REQUEST).json(responseBuilder.error(errors))

	try {
		const createdUser = await userService.registerUser(data)
		return res.status(status.CREATED).json(responseBuilder.success(createdUser))
	} catch (error) {
		return res
			.status(status.BAD_REQUEST)
			.json(responseBuilder.error('internal error'))
	}
})

export default router
