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
		sort: SortField | null;

		/** Sort Direction. */
		direction: SortDirection | null;
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
		filter: readonly FilterType[] | null;
	}>;

	/**
	 *	Map sort filed and direction to params.
	 * @param sort Sort enums.
	 * @param direction Direction enums.
	 * @returns A string being casted.
	 */
	export function mapSortFieldAndDirectionToOrdering<T>(sort: T, direction: SortDirection): string {
		return `${direction === SortDirection.Ascending ? '' : '-'}${sort}`;
	}

	/** Combined. */
	export type Combined = BaseQueryParams.Combined & Sort & Filter;
}
