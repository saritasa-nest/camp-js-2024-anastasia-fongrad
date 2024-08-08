/** Represents error messages received from a server. */
export enum ErrorMessageDto {
	NoPermission = 'You do not have permission to perform this action.',
	NoAccount = 'No active account found with the given credentials',
	AuthenticationError = 'Incorrect authentication credentials.',
	ServerError = 'A server error occurred.',
	InvalidToken = 'Token is invalid or expired',
	HeaderError = 'Could not satisfy the request Accept header.',
	NoBlank = 'This field may not be blank.',
	EmailError = 'Enter a valid email address.',
	PasswordLength = 'This password is too short. It must contain at least 8 characters.',
	PasswordCommon = 'This password is too common.',
	PasswordNumeric = 'This password is entirely numeric.',
	NotUnique = 'User with this Email address already exists.',
}
