/** User registration dto. */
export type UserRegistrationDto = {

	/** User's email. */
	readonly email: string;

	/** User's first name. */
	readonly first_name?: string;

	/** User's last name. */
	readonly last_name?: string;

	/** User's password. */
	readonly password: string;
};
