import { AnimeSortField } from './enums/anime-sort-field.enum';

/** A type for an ordering parameter. */
export type AnimeSortParameter = {

	/** Sort parameter name. */
	readonly parameterName: AnimeSortField;

	/** Sort direction. */
	readonly direction: 'asc' | 'desc' | '';
};
