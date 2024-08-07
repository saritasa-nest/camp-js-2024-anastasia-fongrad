import { FormControl, NonNullableFormBuilder, FormGroup, Validators } from '@angular/forms';

/** 1. */
export type LoginForm = {

	/** 1. */
	readonly email: FormControl<string>;

	/** 1. */
	readonly password: FormControl<string>;
};

export namespace UserLoginForm {

	/**
	 * Initializes a login form using FormBuilder.
	 * @param formBuilder Form builder object.
	 */
	export function initialize(formBuilder: NonNullableFormBuilder): FormGroup<LoginForm> {
		return formBuilder.group({
			email: formBuilder.control('', [
				Validators.required,
				Validators.email,
			]),
			password: formBuilder.control('', [Validators.required]),
		});
	}
}
