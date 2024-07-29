/** Anime query parameters DTO. */
export type AnimeQueryParametersDto = {

	/** Offset of the first anime. */
	offset: number;

	/** Max number of items per page. */
	limit: number;

	/** Anime types to filter by. */
	type__in: string;

	/** A query to search anime by title. */
	search: string;

	/** Columns to sort anime by. */
	ordering: string;
};
