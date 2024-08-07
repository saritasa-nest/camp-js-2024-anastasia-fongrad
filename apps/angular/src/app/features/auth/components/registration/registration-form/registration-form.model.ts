import { passwordStrong, mustMatch } from '@js-camp/angular/core/utils/helpers/form-validators';
import { FormGroup, Validators, NonNullableFormBuilder, FormControl } from '@angular/forms';

/** Registration form type. */
export type RegistrationForm = {

	/** Email field. */
	readonly email: FormControl<string>;

	/** First name field. */
	readonly firstName: FormControl<string>;

	/** Last name field. */
	readonly lastName: FormControl<string>;

	/** Password field. */
	readonly password: FormControl<string>;

	/** Confirm password field. */
	readonly confirmPassword: FormControl<string>;
};

export namespace UserRegistrationForm {

	/**
	 * Initializes user registration form.
	 * @param formBuilder Non nullable form builder.
	 */
	export function initialize(formBuilder: NonNullableFormBuilder): FormGroup<RegistrationForm> {
		return formBuilder.group({
			email: formBuilder.control('', [
				Validators.required,
				Validators.email,
			]),
			firstName: formBuilder.control('', [Validators.required]),
			lastName: formBuilder.control('', [Validators.required]),
			password: formBuilder.control('', [Validators.required]),
			confirmPassword: formBuilder.control('', [Validators.required]),
		}, {
			validators: [
				passwordStrong('password'),
				mustMatch('password', 'confirmPassword'),
			],
		});
	}
}
