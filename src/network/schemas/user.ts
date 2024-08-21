import { z } from 'zod'
import { USER_MESSAGES } from '../response'

export const registerUserDto = z.object({
	username: z
		.string({
			required_error: USER_MESSAGES.USERNAME_REQUIRED,
		})
		.min(1, USER_MESSAGES.USERNAME_MIN_LENGTH),
	password: z
		.string({
			required_error: USER_MESSAGES.PASSWORD_REQUIRED,
		})
		.min(1),
	firstName: z
		.string({
			required_error: USER_MESSAGES.FIRST_NAME_REQUIRED,
		})
		.min(1, USER_MESSAGES.FIRST_NAME_MIN_LENGTH),
	lastName: z
		.string({
			required_error: USER_MESSAGES.LAST_NAME_REQUIRED,
		})
		.min(1, USER_MESSAGES.LAST_NAME_MIN_LENGTH),
})

export type RegisterUserDto = z.infer<typeof registerUserDto>
