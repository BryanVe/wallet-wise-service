export const responseBuilder = {
	success: <T>(data: T) => ({
		success: true,
		data,
	}),
	error: <T>(data: T) => ({
		success: false,
		data,
	}),
}
