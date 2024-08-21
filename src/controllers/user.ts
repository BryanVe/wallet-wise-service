import { Router } from 'express'
import status from 'http-status'
import { validateSchema } from '@/utils/schemas'
import { registerUserDto } from '@/network/schemas'
import { HttpError, responseBuilder, USER_MESSAGES } from '@/network/response'
import { userService } from '@/services'

const router = Router()

router.post('/register', async (req, res, next) => {
	try {
		const { data: registerUser, errors } = validateSchema(
			registerUserDto,
			req.body
		)
		if (errors)
			throw new HttpError(
				status.BAD_REQUEST,
				USER_MESSAGES.INVALID_USER_DATA,
				errors
			)

		const user = await userService.registerUser(registerUser)
		return res
			.status(status.CREATED)
			.json(responseBuilder.success(USER_MESSAGES.REGISTERED_USER, user))
	} catch (error) {
		next(error)
	}
})

router.get('/', async (_, res, next) => {
	try {
		const users = await userService.getUsers()
		return res
			.status(status.OK)
			.json(responseBuilder.success(USER_MESSAGES.FOUND_USERS, users))
	} catch (error) {
		next(error)
	}
})

router.get('/:userId', async (req, res, next) => {
	try {
		if (!req.params.userId)
			throw new HttpError(status.BAD_REQUEST, USER_MESSAGES.USER_ID_REQUIRED)

		const user = await userService.getUser(req.params.userId)

		if (!user)
			throw new HttpError(status.NOT_FOUND, USER_MESSAGES.USER_NOT_FOUND)

		return res
			.status(status.OK)
			.json(responseBuilder.success(USER_MESSAGES.FOUND_USER, user))
	} catch (error) {
		next(error)
	}
})

export default router
