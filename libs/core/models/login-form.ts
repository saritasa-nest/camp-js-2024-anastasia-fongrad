import { FormControl } from '@angular/forms';

/** 1. */
export type LoginForm = {

	/** 1. */
	readonly email: FormControl<string>;

	/** 1. */
	readonly password: FormControl<string>;
};
