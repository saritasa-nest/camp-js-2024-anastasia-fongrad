import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ServerError } from '@js-camp/core/models/server-error.model';

/** Key for server error inside input errors. */
const SERVER_ERROR_KEY = 'serverError';

/** Form validation service. */
@Injectable({
	providedIn: 'root',
})
export class FormValidationService {

	private clientErrorMessages: Readonly<Record<string, string>> = {
		required: 'This field is required',
		email: 'Incorrect email address',
		strong: 'Password is not strong enough',
		mustMatch: 'Passwords must match',
	};

	/**
	 * Returns an error message for the current formControl.
	 * @param form FormGroup to work with.
	 * @param controlName Name of a form control.
	 * @param serverErrors An array of server errors.
	 */
	public getErrorMessage(
		form: FormGroup,
		controlName: string,
		serverErrors: ServerError[] | null | void,
	): string | null {
		const formField = form.get(controlName);
		for (const errorKey in this.clientErrorMessages) {
			if (formField?.hasError(errorKey)) {
				return this.clientErrorMessages[errorKey];
			}
		}
		if (serverErrors == null) {
			return null;
		}
		const controlError = serverErrors.find(error => error.controlName === controlName);
		if (controlError != null) {
			return controlError.controlErrors[0];
		}
		return null;
	}

	/**
	 * Sets server errors for the form.
	 * @param form FormGroup to work with.
	 * @param serverErrors An array of server errors.
	 */
	public setFormErrors(
		form: FormGroup,
		serverErrors: ServerError[] | null | void,
	): void {
		Object.keys(form.controls).forEach(key => {
			const control = form.get(key);
			if (control == null) {
				return;
			}
			const controlError = serverErrors?.find(error => error.controlName === key);
			if (controlError != null) {
				control.setErrors({ [SERVER_ERROR_KEY]: controlError.controlErrors[0] });
				control.markAsTouched();
				return;
			}
			const existingErrors = control.errors;
			if (existingErrors != null) {
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
