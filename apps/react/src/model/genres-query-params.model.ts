import { BaseQueryParams } from './base-query-params.model';

/** Genres query params. */
export namespace GenresQueryParams {

	/** Sort field. */
	export enum SortField {
		Name = 'name',
		Type = 'type',
	}

	/** Sort direction. */
	export enum SortDirection {
		Ascending = 'asc',
		Descending = 'desc',
	}

	/** Sort. */
	export type Sort = Readonly<{

		/** Sort. */
		sort: string | null;

		/** Sort Direction. */
		direction: string | null;
	}>;

	/** Filter type. */
	export enum FilterType {
		Genres = 'genres',
		ExplicitGenres = 'explicit-genres',
		Themes = 'themes',
		Demographics = 'demographics',
	}

	/** Filter. */
	export type Filter = Readonly<{

		/** Filter. */
		filter: string | null;
	}>;

	/** Combined. */
	export type Combined = BaseQueryParams.Combined & Sort & Filter;
}
