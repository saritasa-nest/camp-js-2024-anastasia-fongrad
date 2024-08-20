import { AnimeSortDirections } from './enums/anime-sort-directions.enum';

/** Anime multi sort model parameter. */
export type AnimeMultiSortParameter = {

	/** Sorting by title direction. */
	readonly animeTitleDirection: AnimeSortDirections;

	/** Sorting by status direction. */
	readonly animeStatusDirection: AnimeSortDirections;
};
