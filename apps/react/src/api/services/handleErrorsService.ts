import { ServerError } from '@js-camp/core/models/server-error.model';
import { ServerErrorsMapper } from '@js-camp/core/mappers/server-errors.mapper';
import { UseFormSetError, FieldValues, Path, FieldError } from 'react-hook-form';
import { isAxiosError } from 'axios';

export namespace HandleErrorsService {

	const FORM_ERROR_KEY = 'root' ;

	/**
	 * Parses server errors object.
	 * @param error An error received from a server.
	 */
	export function parseError(error: unknown): ServerError[] {
		if (isAxiosError(error) && error.response?.data.errors) {
			return ServerErrorsMapper.fromDto(error.response.data.errors);
		}
		throw new Error('An unknown error occurred');
	}

	/**
	 * Maps server error to the fieldError objects.
	 * @param serverErrors An array of server errors.
	 */
	export function mapServerErrorsToFieldErrors(serverErrors: ServerError[]): Record<string, FieldError> {
		const fieldErrors: Record<string, FieldError> = {};
		serverErrors.forEach(error => {
			fieldErrors[error.controlName] = {
				type: 'manual',
				message: error.controlErrors[0],
			};
		});
		return fieldErrors;
	}

	/**
	 * Sets form control errors.
	 * @param serverErrors An array of server errors.
	 * @param setError A method to set react hook form errors.
	 * @param formFields Form field names.
	 */
	export function setErrors<T extends FieldValues>(
		serverErrors: ServerError[],
		setError: UseFormSetError<T>,
		formFields: T,
	): void {
		serverErrors.forEach(error => {
			if (isFormField(error.controlName, formFields)) {
				setError(error.controlName, {
					type: 'manual',
					message: error.controlErrors[0],
				});
			} else {
				setError(FORM_ERROR_KEY, {
					type: 'manual',
					message: error.controlErrors[0],
				});
			}
		});
	}

	/**
	 * Checks if a string is a valid form field.
	 * @param key A key to check.
	 * @param formFields Form fields names.
	 */
	function isFormField<T extends FieldValues>(key: string, formFields: T): key is Path<T> {
		return key in formFields;
	}
}
