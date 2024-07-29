import { OrderingParameter } from '../models/ordering.model';
import { DtoSortParameter } from '../utils/enums/dto-sort-parameter.enum';
import { ModelSortParameter } from '../utils/enums/model-sort-parameter.enum';

import { SortParameterMapper } from './sort-parameter.mapper';

export namespace OrderingMapper {

	/**
	 * Converts anime table ordering from a model to a dto object.
	 * @param model Anime table ordering.
	 */
	export function toDto(model: OrderingParameter[]): string {
		if (model.length === 0) {
			return '';
		}
		return model.map(orderParameter => {
			const parameter = SortParameterMapper.toDto(orderParameter.parameterName as ModelSortParameter);
			return orderParameter.parameterOrder ? parameter : `-${parameter}`;
		}).join(',');
	}

	/**
	 * Converts anime table ordering from a dto object to a model.
	 * @param dto Anime table ordering.
	 */
	export function fromDto(dto: string): OrderingParameter[] {
		if (!dto) {
			return [];
		}
		return dto.split(',').map(orderParameter => {
			const parameterOrder = !orderParameter.startsWith('-');
			const parameter = parameterOrder ? orderParameter : orderParameter.slice(1);
			const parameterName = SortParameterMapper.fromDto(parameter as DtoSortParameter);
			return {
				parameterName: parameterName as ModelSortParameter,
				parameterOrder,
			};
		});
	}
}
