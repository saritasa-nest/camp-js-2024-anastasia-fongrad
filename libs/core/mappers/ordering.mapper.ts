import { OrderingParameter } from '../models/ordering.model';
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
}
