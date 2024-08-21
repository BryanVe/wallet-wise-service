export class HttpError extends Error {
	public readonly code: number
	public readonly message: string
	public readonly data?: unknown

	constructor(code: number, message: string, data?: unknown) {
		super()
		this.code = code
		this.message = message
		this.data = data
		this.stack = undefined
	}
}
