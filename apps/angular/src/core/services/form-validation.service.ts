import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputErrors } from '@js-camp/core/models/input-error';

/** 1. */
@Injectable({
	providedIn: 'root',
})
export class FormValidationService {

	private inputErrors: InputErrors[] = [];

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
	 * @returns 1.
	 */
	public getErrorMessage(form: FormGroup, attributeName: string): string | null {
		const formField = form.get(attributeName);
		if (!formField) {
			return null;
		}
		for (const errorKey in this.errorMessages) {
			if (formField.hasError(errorKey)) {
				return this.errorMessages[errorKey];
			}
		}
		const inputError = this.inputErrors.find(error => error.attributeName === attributeName);
		return inputError ? inputError.errors[0] : null;
	}

	/**
	 * 1.
	 * @param form 1.
	 */
	public setFormErrors(form: FormGroup): void {
		Object.keys(form.controls).forEach(key => {
			const control = form.get(key);
			const inputError = this.inputErrors.find(error => error.attributeName === key);
			if (!control) {
				return;
			}
			if (inputError) {
				control.setErrors({ serverError: inputError.errors[0] });
				return;
			}
			const existingErrors = control.errors;
			if (existingErrors) {
				delete existingErrors['serverError'];
				if (Object.keys(existingErrors).length === 0) {
					control.setErrors(null);
					return;
				}
				control.setErrors(existingErrors);
			}
		});
	}

	/**
	 * 1.
	 * @param errors 1.
	 */
	public setInputErrors(errors: InputErrors[]): void {
		this.inputErrors = errors;
	}
}
