import { passwordStrong, mustMatch } from '@js-camp/angular/core/utils/helpers/form-validators';
import { FormGroup, Validators, NonNullableFormBuilder, FormControl } from '@angular/forms';

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

export namespace UserRegistrationForm {

	/**
	 * 1.
	 * @param formBuilder 1.
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
