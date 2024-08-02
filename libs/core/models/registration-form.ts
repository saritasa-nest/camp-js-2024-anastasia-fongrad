import { FormControl } from '@angular/forms';

/** 1. */
export type RegistrationForm = {

	/** 1. */
	readonly email: FormControl<string>;

	/** 1. */
	readonly firstName: FormControl<string>;

	/** 1. */
	readonly lastName: FormControl<string>;

	/** 1. */
	readonly password: FormControl<string>;

	/** 1. */
	readonly confirmPassword: FormControl<string>;
};
