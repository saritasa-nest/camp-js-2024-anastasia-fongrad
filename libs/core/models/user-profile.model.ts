/** User profile model. */
export type UserProfile = {

	/** User's email. */
	readonly email: string;

	/** User's first name. */
	readonly firstName: string;

	/** User's last name. */
	readonly lastName: string;

	/** User's profile avatar. */
	readonly avatar?: string;
};
