import { ServerError } from '../models/server-error';
import { ServerErrorDto } from '../dtos/server-error.dto';
import { ErrorMessage } from '../models/enums/error-message.enum';

import { ErrorMessageMapper } from './error-message.mapper';

export namespace ServerErrorsMapper {

	/**
	 * Maps server errors from dto.
	 * @param dto Server errors dto.
	 */
	export function fromDto(dto: ServerErrorDto[]): ServerError[] {
		const errorMap = new Map<string, ErrorMessage[]>();
		dto.forEach(error => {
			let errorField = error.attr;
			if (!errorMap.has(errorField)) {
				if (error.attr === null) {
					errorField = 'form';
				}
				errorMap.set(errorField, []);
			}
			errorMap.get(errorField)?.push(ErrorMessageMapper.fromDto(error.detail));
		});
		const result: ServerError[] = [];
		errorMap.forEach((controlErrors, controlName) => {
			result.push({ controlName, controlErrors });
		});
		return result;
	}
}
