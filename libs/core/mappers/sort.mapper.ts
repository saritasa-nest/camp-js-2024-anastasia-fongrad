import { SortParameter } from '../models/sort.model';
import { AnimeSortFieldDto } from '../dtos/enums/dto-sort-parameter.enum';
import { AnimeSortField } from '../models/enums/model-sort-parameter.enum';

import { SortParameterMapper } from './sort-parameter.mapper';

export namespace SortMapper {

	/**
	 * Converts anime table ordering from a model to a dto object.
	 * @param model Anime table ordering.
	 */
	export function toDto(model: SortParameter[]): string {
		if (model.length === 0) {
			return '';
		}
		return model.map(orderParameter => {
			const parameter = SortParameterMapper.toDto(orderParameter.parameterName as AnimeSortField);
			return orderParameter.direction === 'ascending' ? parameter : `-${parameter}`;
		}).join(',');
	}

	/**
	 * Converts anime table ordering from a dto object to a model.
	 * @param dto Anime table ordering.
	 */
	export function fromDto(dto: string): SortParameter[] {
		if (!dto) {
			return [];
		}
		return dto.split(',').map(orderParameter => {
			const isAscending = orderParameter.startsWith('-') ? 'descending' : 'ascending';
			const parameter = isAscending ? orderParameter : orderParameter.slice(1);
			const parameterName = SortParameterMapper.fromDto(parameter as AnimeSortFieldDto);
			return {
				parameterName: parameterName as AnimeSortField,
				direction: isAscending,
			};
		});
	}
}
