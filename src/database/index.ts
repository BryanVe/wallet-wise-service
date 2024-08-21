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
			exclude<TData extends Record<string, unknown>, TKey extends keyof TData>(
				data: TData | null,
				keys: TKey[]
			) {
				if (!data) return null

				return Object.fromEntries(
					Object.entries(data).filter(([key]) => !keys.includes(key as TKey))
				) as Omit<TData, TKey>
			},
		},
	},
})
