import { passwordStrong, mustMatch } from '@js-camp/angular/core/utils/helpers/form-validators';
import { FormGroup, Validators, NonNullableFormBuilder, FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef } from '@angular/core';

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
	 * @param destroyRef Ref to the component destroy.
	 */
	export function initialize(formBuilder: NonNullableFormBuilder, destroyRef: DestroyRef): FormGroup<RegistrationForm> {
		const passwordControl = formBuilder.control('', [
			Validators.required,
			passwordStrong(),
		]);

		const confirmPasswordControl = formBuilder.control('', [
			Validators.required,
			mustMatch(passwordControl),
		]);

		// Update the confirmPassword control whenever the password control value changes
		passwordControl.valueChanges.pipe(takeUntilDestroyed(destroyRef))
			.subscribe(() => {
				confirmPasswordControl.updateValueAndValidity();
			});

		return formBuilder.group({
			email: formBuilder.control('', [
				Validators.required,
				Validators.email,
			]),
			firstName: formBuilder.control('', [Validators.required]),
			lastName: formBuilder.control('', [Validators.required]),
			password: passwordControl,
			confirmPassword: confirmPasswordControl,
		});
	}
}
