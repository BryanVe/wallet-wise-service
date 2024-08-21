import { Router } from 'express'
import status from 'http-status'
import { validateSchema } from '@/utils/schemas'
import { registerUserDto } from '@/network/schemas'
import { HttpError, responseBuilder, USER_MESSAGES } from '@/network/response'
import { userService } from '@/services'

const router = Router()

router.post('/register', async (req, res, next) => {
	try {
		const { data, errors } = validateSchema(registerUserDto, req.body)
		if (errors)
			throw new HttpError(
				status.BAD_REQUEST,
				USER_MESSAGES.INVALID_USER_DATA,
				errors
			)

		const createdUser = await userService.registerUser(data)
		return res
			.status(status.CREATED)
			.json(responseBuilder.success(USER_MESSAGES.REGISTERED_USER, createdUser))
	} catch (error) {
		next(error)
	}
})

export default router
