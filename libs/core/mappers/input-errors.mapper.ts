import { InputErrors } from '../models/input-error';
import { InputErrorDto } from '../dtos/input-error.dto';
import { ErrorMessageDto } from '../dtos/enums/error-message-dto.enum';

import { ErrorMessageMapper } from './error-message.mapper';

export namespace ServerErrorsMapper {

	/**
	 * 1.
	 * @param dto 1.
	 */
	export function fromDto(dto: InputErrorDto[]): InputErrors[] {
		const errorMap = new Map<string, string[]>();
		dto.forEach(error => {
			let errorField = error.attr;
			if (!errorMap.has(errorField)) {
				if (error.attr === null) {
					errorField = 'form';
				}
				errorMap.set(errorField, []);
			}
			errorMap.get(errorField)?.push(ErrorMessageMapper.fromDto(error.detail as ErrorMessageDto));
		});
		const result: InputErrors[] = [];
		errorMap.forEach((errors, attributeName) => {
			result.push({ attributeName, errors });
		});
		return result;
	}
}
