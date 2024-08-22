import { StudioSortDirection } from '@js-camp/core/models/enums/studio-sort-direction.enum';
import { StudioSort } from '@js-camp/core/models/studio-sort.model';

/**
 * Transforms sort param from url string format to studio sort model.
 * @param param Sort param in url string.
 */
export function sortValueFromQueryParams(param: string): StudioSort {
	const firstChar = param[0];
	if (firstChar === '-') {
		return {
			sortValue: param.slice(1),
			sortDirection: StudioSortDirection.Descending,
		};
	}

	return {
		sortValue: param,
		sortDirection: StudioSortDirection.Ascending,
	};
}
