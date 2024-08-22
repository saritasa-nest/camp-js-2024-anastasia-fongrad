import { StudioSort } from '@js-camp/core/models/studio-sort.model';

/**
 * Transforms sort studio sort model to url string format.
 * @param studioSort Studio sort model.
 */
export function queryFromSortValue(studioSort: StudioSort): string {
	if (studioSort.sortValue == null) {
		return '';
	}
	return studioSort.sortDirection === 'asc' ? studioSort.sortValue : `-${studioSort.sortValue}`;
}
