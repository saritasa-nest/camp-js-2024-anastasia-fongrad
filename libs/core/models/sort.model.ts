import { AnimeSortField } from './enums/model-sort-parameter.enum';

/** A type for an ordering parameter. */
export type SortParameter = {

	/** Ordering parameter name. */
	readonly parameterName: AnimeSortField;

	/** Ordering direction. */
	readonly isAscending: boolean;
};
