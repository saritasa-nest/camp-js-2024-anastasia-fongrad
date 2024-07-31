import { SortParameter } from '../models/sort.model';
import { AnimeSortFieldDto } from '../dtos/enums/dto-sort-parameter.enum';
import { AnimeSortField } from '../models/enums/model-sort-parameter.enum';

import { AnimeSortFieldMapper } from './anime-sort-field.mapper';

export namespace AnimeSortParameterMapper {

	/**
	 * Converts anime table ordering from a model to a dto object.
	 * @param model Anime table ordering.
	 */
	export function toDto(model: SortParameter): string {
		if (!model) {
			return '';
		}
		const parameter = AnimeSortFieldMapper.toDto(model.parameterName as AnimeSortField);
		return model.direction === 'ascending' ? parameter : `-${parameter}`;
	}

	/**
	 * Converts anime table ordering from a dto object to a model.
	 * @param dto Anime table ordering.
	 */
	export function fromDto(dto: string): SortParameter | null {
		if (!dto || dto == '') {
			return null;
		}
		const isAscending = dto.startsWith('-') ? 'descending' : 'ascending';
		const parameter = isAscending ? dto : dto.slice(1);
		const parameterName = AnimeSortFieldMapper.fromDto(parameter as AnimeSortFieldDto);
		return {
			parameterName: parameterName as AnimeSortField,
			direction: isAscending,
		};
	}
}
