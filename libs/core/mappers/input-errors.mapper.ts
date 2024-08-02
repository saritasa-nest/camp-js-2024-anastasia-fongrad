import { InputErrors } from '../models/input-error';
import { InputErrorDto } from '../dtos/input-error.dto';

export namespace InputErrorsMapper {

	/**
	 * 1.
	 * @param dto 1.
	 */
	export function fromDto(dto: InputErrorDto[]): InputErrors[] {
		const errorMap = new Map<string, string[]>();
		dto.forEach(error => {
			if (!errorMap.has(error.attr)) {
				errorMap.set(error.attr, []);
			}
			errorMap.get(error.attr)?.push(error.detail);
		});
		const result: InputErrors[] = [];
		errorMap.forEach((errors, attributeName) => {
			result.push({ attributeName, errors });
		});
		return result;
	}
}
