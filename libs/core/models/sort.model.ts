import { AnimeSortField } from './enums/model-sort-parameter.enum';

/** A type for an ordering parameter. */
export type SortParameter = {

	/** Sort parameter name. */
	readonly parameterName: AnimeSortField;

	/** Sort direction. */
	readonly direction: 'ascending' | 'descending' | '';
};
