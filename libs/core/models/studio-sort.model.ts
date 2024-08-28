import { StudioSortDirection } from './enums/studio-sort-direction.enum';

/** Studio sort field. */
export type StudioSort = {

	/** Sort value: name of modification time. */
	readonly sortValue?: string;

	/** Sort direction: 'asc', 'desc' or empty. */
	readonly sortDirection?: StudioSortDirection;
};
