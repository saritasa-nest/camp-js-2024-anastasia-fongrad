import { AnimeSortParameter } from '../models/anime-sort-parameter.model';
import { AnimeSortFieldDto } from '../dtos/enums/anime-sort-field-dto.enum';
import { AnimeSortField } from '../models/enums/anime-sort-field.enum';
import { AnimeSortDirections } from '../models/enums/anime-sort-directions.enum';
import { EnumUtils } from '../utils/enum-utils';
import { DESCENDING_PREFIX, DEFAULT_SORT_PARAM } from '../utils/anime-constants';

import { AnimeSortFieldMapper } from './anime-sort-field.mapper';

export namespace AnimeSortParameterMapper {

	/**
	 * Converts anime table ordering from a model to a dto object.
	 * @param model Anime table ordering.
	 */
	export function toDto(model: AnimeSortParameter): string {
		if (!model || model.direction === AnimeSortDirections.Empty) {
			return '';
		}
		const modelParameter = EnumUtils.fromString(model.parameterName, AnimeSortField);
		const parameter = modelParameter ? AnimeSortFieldMapper.toDto(modelParameter) : undefined;
		if (!parameter) {
			return '';
		}
		const orderedParameter = model.direction === AnimeSortDirections.Ascending ? parameter : `${DESCENDING_PREFIX}${parameter}`;
		return orderedParameter;
	}

	/**
	 * Converts anime table ordering from a dto object to a model.
	 * @param dto Anime table ordering.
	 */
	export function fromDto(dto: string): AnimeSortParameter {
		if (!dto || dto === '') {
			return DEFAULT_SORT_PARAM;
		}
		const direction = dto.startsWith(DESCENDING_PREFIX) ? AnimeSortDirections.Descending : AnimeSortDirections.Ascending;
		const parameter = direction === AnimeSortDirections.Ascending ? dto : dto.replace(DESCENDING_PREFIX, '');
		const dtoParameter = EnumUtils.fromString(parameter, AnimeSortFieldDto);
		const parameterName = dtoParameter ? AnimeSortFieldMapper.fromDto(dtoParameter) : undefined;
		if (!parameterName) {
			return DEFAULT_SORT_PARAM;
		}
		return {
			parameterName,
			direction,
		};
	}
}
