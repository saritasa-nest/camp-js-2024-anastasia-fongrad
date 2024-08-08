import { FormControl, NonNullableFormBuilder, FormGroup, Validators } from '@angular/forms';

/** Login form type. */
export type LoginForm = {

	/** Email form field. */
	readonly email: FormControl<string>;

	/** Password form field. */
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
