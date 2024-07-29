import { ModelSortParameter } from '../utils/enums/model-sort-parameter.enum';

/** A type for an ordering parameter. */
export type OrderingParameter = {

	/** Ordering parameter name. */
	readonly parameterName: ModelSortParameter;

	/** Ordering direction. */
	readonly parameterOrder: boolean;
};
