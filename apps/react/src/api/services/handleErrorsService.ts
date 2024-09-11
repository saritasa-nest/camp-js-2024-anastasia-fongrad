import { ServerError } from '@js-camp/core/models/server-error.model';
import { ServerErrorsMapper } from '@js-camp/core/mappers/server-errors.mapper';
import { FieldError } from 'react-hook-form';
import { isAxiosError } from 'axios';

export namespace HandleErrorsService {

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
}
