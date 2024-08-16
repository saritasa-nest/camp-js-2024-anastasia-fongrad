import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ServerError } from '@js-camp/core/models/server-error.model';
import { Observable, of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ServerErrorsMapper } from '@js-camp/core/mappers/server-errors.mapper';

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
	 * @param formControl FormGroup to work with.
	 * @param serverErrors An array of server errors.
	 */
	public getControlErrorMessage(formControl: AbstractControl): string | null {
		for (const errorKey in this.clientErrorMessages) {
			if (formControl.hasError(errorKey)) {
				return this.clientErrorMessages[errorKey];
			}
		}
		if (formControl.hasError(SERVER_ERROR_KEY)) {
			return formControl.getError(SERVER_ERROR_KEY);
		}
		return null;
	}

	/**
	 * Returns an error message for the form.
	 * @param form Form group.
	 */
	public getFormErrorMessage(form: FormGroup): string | null {
		if (form.hasError(SERVER_ERROR_KEY)) {
			return form.getError(SERVER_ERROR_KEY);
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
		const formError = serverErrors?.find(error => error.controlName === 'form');
		if (formError != null) {
			form.setErrors({ [SERVER_ERROR_KEY]: formError.controlErrors[0] });
			form.markAsTouched();
			form.markAsDirty();
		}
		Object.keys(form.controls).forEach(key => {
			const control = form.get(key);
			if (control == null) {
				return;
			}
			control.markAsTouched();
			control.markAsDirty();
			const controlError = serverErrors?.find(error => error.controlName === key);
			if (controlError != null) {
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

	/**
	 * Parses an error received from the server.
	 * @param error Servers HttpErrorResponse.
	 */
	public parseError(error: unknown): Observable<ServerError[]> {
		if (error instanceof HttpErrorResponse && error.error?.errors) {
			return of(ServerErrorsMapper.fromDto(error.error.errors));
		}
		return throwError(() => new Error('An unknown error occurred'));
	}
}