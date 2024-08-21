import { prisma } from '..'

export const create = (data: TUser) =>
	prisma.user.create({
		data,
	})

export const get = async () => {
	const users = await prisma.user.findMany()
	return users.map(user => prisma.user.exclude(user, ['password']))
}

export const getOne = async (id: string) => {
	const user = await prisma.user.findFirst({
		where: {
			id,
		},
	})
	return prisma.user.exclude(user, ['password'])
}
