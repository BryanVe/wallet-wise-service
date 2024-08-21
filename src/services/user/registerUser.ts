import { userQueries } from '@/database/queries'
import { RegisterUserDto } from '@/network/schemas'

export const registerUser = (registerUser: RegisterUserDto) =>
	userQueries.createUser(registerUser)
