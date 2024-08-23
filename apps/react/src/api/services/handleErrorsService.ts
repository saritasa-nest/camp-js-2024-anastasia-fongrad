import { ServerError } from '@js-camp/core/models/server-error.model';
import { ServerErrorsMapper } from '@js-camp/core/mappers/server-errors.mapper';
import { isAxiosError } from 'axios';

export namespace ErrorsService {

	/**
	 * 1.
	 * @param error 1.
	 */
	export function parseError(error: unknown): ServerError[] {
		if (isAxiosError(error) && error.response?.data.errors) {
			return ServerErrorsMapper.fromDto(error.response.data.errors);
		}
		throw new Error('An unknown error occurred');
	}
}
