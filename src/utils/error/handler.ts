import { Request, Response } from 'express'
import status from 'http-status'
import { COMMON_MESSAGES, HttpError, responseBuilder } from '@/network/response'

type ErrorHandler = (
	err: unknown,
	req: Request,
	res: Response
) => void

export const errorHandler: ErrorHandler = (err, _, res) => {
	if (err instanceof HttpError)
		return res
			.status(err.code)
			.json(responseBuilder.error(err.message, err.data))

	if (err instanceof Error)
		return res
			.status(status.INTERNAL_SERVER_ERROR)
			.json(responseBuilder.error(err.message, err))

	return res
		.status(status.INTERNAL_SERVER_ERROR)
		.json(responseBuilder.error(COMMON_MESSAGES.UNKNOWN_ERROR))
}
