export const responseBuilder = {
	success: <T>(message: string, data?: T) => ({
		success: true,
		message,
		data,
	}),
	error: <T>(message: string, data?: T) => ({
		success: false,
		message,
		data,
	}),
}
