import { ModelSortParameter } from "../utils/enums/model-sort-parameter";

export type OrderingParameter = {

	/** 1. */
	readonly parameterName: ModelSortParameter;

	/** 1. */
	readonly parameterOrder: boolean;
}
