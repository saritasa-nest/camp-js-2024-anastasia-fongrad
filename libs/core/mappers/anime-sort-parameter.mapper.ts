import { AnimeSortParameter } from '../models/anime-sort-parameter.model';
import { AnimeSortFieldDto } from '../dtos/enums/anime-sort-field-dto.enum';
import { AnimeSortField } from '../models/enums/anime-sort-field.enum';

import { EnumUtils } from '../utils/enum-utils';
import { DESCENDING_PREFIX } from '../utils/anime-constants';

import { AnimeSortFieldMapper } from './anime-sort-field.mapper';

export namespace AnimeSortParameterMapper {

	/**
	 * Converts anime table ordering from a model to a dto object.
	 * @param model Anime table ordering.
	 */
	export function toDto(model: AnimeSortParameter): string {
		if (!model || model.direction === '') {
			return '';
		}
		const parameter = AnimeSortFieldMapper.toDto(EnumUtils.fromString(model.parameterName, AnimeSortField));
		if (!parameter) {
			return '';
		}
		const orderedParameter = model.direction === 'asc' ? parameter : `${DESCENDING_PREFIX}${parameter}`;
		return orderedParameter;
	}

	/**
	 * Converts anime table ordering from a dto object to a model.
	 * @param dto Anime table ordering.
	 */
	export function fromDto(dto: string): AnimeSortParameter | null {
		if (!dto || dto === '') {
			return null;
		}
		const isAscending = dto.startsWith(DESCENDING_PREFIX) ? 'desc' : 'asc';
		const parameter = isAscending ? dto : dto.replace(DESCENDING_PREFIX, '');
		const parameterName = AnimeSortFieldMapper.fromDto(EnumUtils.fromString(parameter, AnimeSortFieldDto));
		if (!parameterName) {
			return null;
		}
		return {
			parameterName,
			direction: isAscending,
		};
	}
}
