import { OrderingParameter } from '../models/ordering.model';
import { DtoSortParameter } from '../utils/enums/dto-sort-parameter.enum';
import { ModelSortParameter } from '../utils/enums/model-sort-parameter.enum';

import { SortParameterMapper } from './sort-parameter.mapper';

export namespace OrderingMapper {

	/**
	 * Maps genre dto to model.
	 * @param model Genre dto.
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
	 * 1.
	 * @param dto 1.
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
