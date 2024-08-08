/** User profile dto. */
export type UserProfileDto = {

	/** 1. */
	readonly email: string;

	/** 1. */
	readonly first_name: string;

	/** 1. */
	readonly last_name: string;

	/** User's profile avatar. */
	readonly avatar?: string;

	/** User profile creation date. */
	readonly created: string;

	/** User profile last modification date. */
	readonly modified: string;
};
