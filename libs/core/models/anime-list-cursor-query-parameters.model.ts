import { AnimeType } from './enums/anime-type.enum';
import { AnimeMultiSortParameter } from './anime-multi-sort-parameter.model';

/** Anime query parameters model. */
export type AnimeListCursorQueryParameters = {

	/** 1. */
	readonly cursor?: string;

	/** Anime types to filter by. */
	readonly animeTypes: AnimeType[];

	/** A query to search anime by a title. */
	readonly searchQuery: string;

	/** 1. */
	readonly animeMultiSort: AnimeMultiSortParameter;
};
