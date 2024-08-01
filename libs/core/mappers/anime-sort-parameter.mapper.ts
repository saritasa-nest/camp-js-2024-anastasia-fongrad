import { AnimeSortParameter } from '../models/anime-sort-parameter.model';
import { AnimeSortFieldDto } from '../dtos/enums/anime-sort-field-dto.enum';
import { AnimeSortField } from '../models/enums/anime-sort-field.enum';

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
		const parameter = AnimeSortFieldMapper.toDto(model.parameterName as AnimeSortField);
		const orderedParameter = model.direction === 'asc' ? parameter : `-${parameter}`;
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
		const isAscending = dto.startsWith('-') ? 'desc' : 'asc';
		const parameter = isAscending ? dto : dto.slice(1);
		const parameterName = AnimeSortFieldMapper.fromDto(parameter as AnimeSortFieldDto);
		return {
			parameterName: parameterName as AnimeSortField,
			direction: isAscending,
		};
	}
}
