import { AnimeType } from './enums/model-type.enum';
import { SortParameter } from './sort.model';

/** 1. */
export type AnimeQueryParameters = {

	/** Offset of the first anime. */
	offset: number;

	/** Max number of items per page. */
	limitPerPage: number;

	/** Anime types to filter by. */
	animeType: AnimeType[];

	/** A query to search anime by a title. */
	searchQuery: string;

	/** Ordering parameters object to sort anime by. */
	animeOrdering: SortParameter[];
};
