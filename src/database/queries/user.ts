import { prisma } from '..'

export const createUser = async (data: TUser) => {
	const createdUser = await prisma.user.create({
		data,
	})

	return createdUser
}
