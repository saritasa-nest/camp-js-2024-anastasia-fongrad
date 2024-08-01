/** Genre DTO. */
export type UserRegistrationDto = {

	/** Id. */
	readonly email: string;

	/** Name. */
	readonly first_name?: string;

	/** 1. */
	readonly last_name?: string;

	/** 1. */
	readonly password: string;

	/** 1. */
	readonly avatar?: string;
};
