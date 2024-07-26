import { OrderingParameter } from '../models/ordering.model';

import { SortParameterMapper } from './sort-parameter.mapper';

export namespace OrderingMapper {

	/**
	 * Maps genre dto to model.
	 * @param model Genre dto.
	 */
	export function toDto(model: OrderingParameter[]): string | null {
		if (model.length === 0) {
			return null;
		}
		return model.map(orderParameter => {
			const parameter = SortParameterMapper.toDto(orderParameter.parameterName);
			return orderParameter.parameterOrder ? parameter : `-${parameter}`;
		}).join(',');
	}
}
