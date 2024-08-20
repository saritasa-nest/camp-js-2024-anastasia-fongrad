import { BaseQueryParams } from "./base-query-params.model";

/** Genres query params. */
export namespace GenresQueryParams {

	/** Sort field. */
	export enum SortField {
		Name = 'name',
		Type = 'type',
	}

	/** Sort direction. */
	export enum SortDirection {
		Ascending = 'ascending',
		Descending = 'descending',
	}

	/** Sort. */
	export type Sort = Readonly<{

		/** Sort. */
		sort: string | null;
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
	export type Combined = BaseQueryParams.Search & Sort & Filter;
}
