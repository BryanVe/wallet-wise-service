import { z } from 'zod'

export const validateSchema = <TSchema extends z.ZodSchema, TData>(
	schema: TSchema,
	data: TData
) => {
	const validation = schema.safeParse(data)

	if (!validation.success) {
		const errors: Partial<Record<keyof TData, string[]>> = {}

		const fieldErrors = validation.error.formErrors.fieldErrors
		const fieldNames = Object.keys(fieldErrors) as (keyof TData)[]

		fieldNames.forEach(fieldName => {
			errors[fieldName] = fieldErrors[fieldName]
		})

		return { errors }
	}

	return { data: validation.data as z.output<typeof schema> }
}
