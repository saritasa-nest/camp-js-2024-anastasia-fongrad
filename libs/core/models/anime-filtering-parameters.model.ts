import { AnimeType } from './enums/anime-type.enum';
import { AnimeMultiSortParameter } from './anime-multi-sort-parameter.model';

/** Anime query parameters model. */
export type AnimeFilteringParameters = {

	/** Anime types to filter by. */
	readonly animeTypes: AnimeType[];

	/** A query to search anime by a title. */
	readonly searchQuery: string;

	/** Anime sort directions object. */
	readonly animeMultiSort: AnimeMultiSortParameter;
};
