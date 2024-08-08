/** Authorization jwt tokens DTO. */
export type AuthorizationTokenDto = {

	/** Refresh jwt token. */
	readonly refresh: string;

	/** Access jwt token. */
	readonly access: string;
};
