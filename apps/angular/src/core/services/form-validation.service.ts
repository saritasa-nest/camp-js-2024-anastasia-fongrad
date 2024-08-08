import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputErrors } from '@js-camp/core/models/input-error';

/** 1. */
const SERVER_ERROR_KEY = 'serverError';

/** 1. */
@Injectable({
	providedIn: 'root',
})
export class FormValidationService {

	private errorMessages: { [key: string]: string; } = {
		required: 'This field is required',
		email: 'Incorrect email address',
		strong: 'Password is not strong enough',
		mustMatch: 'Passwords must match',
	};

	/**
	 * 1.
	 * @param form 1.
	 * @param attributeName 1.
	 * @param serverErrors 1.
	 * @returns 1.
	 */
	public getErrorMessage(
		form: FormGroup,
		attributeName: string,
		serverErrors: InputErrors[] | null | void,
	): string | null {
		const formField = form.get(attributeName);
		for (const errorKey in this.errorMessages) {
			if (formField?.hasError(errorKey)) {
				return this.errorMessages[errorKey];
			}
		}
		if (!serverErrors) {
			return null;
		}
		const inputError = serverErrors.find(error => error.attributeName === attributeName);
		if (inputError) {
			return inputError.errors[0];
		}
		return null;
	}

	/**
	 * 1.
	 * @param form 1.
	 * @param serverErrors 1.
	 */
	public setFormErrors(
		form: FormGroup,
		serverErrors: InputErrors[] | null | void,
	): void {
		Object.keys(form.controls).forEach(key => {
			const control = form.get(key);
			const inputError = serverErrors?.find(error => error.attributeName === key);
			if (!control) {
				return;
			}
			if (inputError) {
				control.setErrors({ serverError: inputError.errors[0] });
				control.markAsTouched();
				return;
			}
			const existingErrors = control.errors;
			if (existingErrors) {
				delete existingErrors[SERVER_ERROR_KEY];
				if (Object.keys(existingErrors).length === 0) {
					control.setErrors(null);
					return;
				}
				control.setErrors(existingErrors);
			}
		});
	}
}
