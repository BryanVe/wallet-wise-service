import { PrismaClient, Prisma } from '@prisma/client'

export const prisma = new PrismaClient().$extends({
	model: {
		$allModels: {
			async exists<TData>(
				this: TData,
				where: Prisma.Args<TData, 'findFirst'>['where']
			): Promise<boolean> {
				const context = Prisma.getExtensionContext(this)
				// @ts-expect-error: Context type is unknown
				const result = await (context as unknown).findFirst({ where })
				return result !== null
			},
		},
	},
})
