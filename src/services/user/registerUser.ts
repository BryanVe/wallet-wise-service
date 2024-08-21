import { userQueries } from '@/database/queries'

export const registerUser = (registerUser: TUser) =>
	userQueries.create(registerUser)
