import { AnimeType } from './enums/anime-type.enum';
import { SortParameter } from './sort.model';

/** Anime query parameters model. */
export type AnimeQueryParameters = {

	/** Number of the current page. */
	readonly pageNumber: number;

	/** Max number of items per page. */
	readonly limitPerPage: number;

	/** Anime types to filter by. */
	readonly animeTypes: AnimeType[];

	/** A query to search anime by a title. */
	readonly searchQuery: string;

	/** Ordering parameters object to sort anime by. */
	readonly animeSort: SortParameter | null;
};
