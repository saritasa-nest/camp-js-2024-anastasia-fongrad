/** Authorization token model. */
export type AuthorizationToken = {

	/** Refresh jwt token. */
	readonly refreshToken: string;

	/** Access jwt token. */
	readonly accessToken: string;
};
