import { AnimeType } from './enums/anime-type.enum';
import { AnimeSortParameter } from './anime-sort-parameter.model';
import { AnimeMultiSortParameter } from './anime-multi-sort-parameter.model';

/** Anime query parameters model. */
export type AnimeQueryParameters = {

	/** Number of the current page. */
	readonly pageIndex: number;

	/** Max number of items per page. */
	readonly limitPerPage: number;

	/** Anime types to filter by. */
	readonly animeTypes: AnimeType[];

	/** A query to search anime by a title. */
	readonly searchQuery: string;

	/** Ordering parameters object to sort anime by. */
	readonly animeSort: AnimeSortParameter;

	/** 1. */
	readonly animeMultiSort: AnimeMultiSortParameter;
};
