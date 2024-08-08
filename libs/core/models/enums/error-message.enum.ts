/** 1. */
export enum ErrorMessage {
	NoPermission = 'You do not have permission to perform this action',
	NoAccount = 'Incorrect email or password',
	AuthenticationError = 'Incorrect authentication credentials',
	ServerError = 'A server error occurred',
	InvalidToken = 'Token is invalid or expired',
	HeaderError = 'Could not satisfy the request Accept header',
	NoBlank = 'This field is required',
	EmailError = 'Enter a valid email address',
	PasswordLength = 'Password must contain at least 8 characters',
	PasswordCommon = 'This password is too common',
	PasswordNumeric = 'Password can not be entirely numeric',
	DefaultError = 'Unknown server error',
	NotUnique = 'User with this email address already exists',
}
