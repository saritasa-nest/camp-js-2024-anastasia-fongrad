/** User profile dto. */
export type UserProfileDto = {

	/** User's email address. */
	readonly email?: string;

	/** User's first name. */
	readonly first_name?: string;

	/** User's last name. */
	readonly last_name?: string;

	/** User's profile avatar. */
	readonly avatar?: string;

	/** User profile creation date. */
	readonly created?: string;

	/** User profile last modification date. */
	readonly modified?: string;
};
