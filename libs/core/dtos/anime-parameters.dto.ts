/** Anime query parameters DTO. */
export type AnimeQueryParametersDto = {

	/** Offset of the first anime. */
	readonly offset: number;

	/** Max number of items per page. */
	readonly limit: number;

	/** Anime types to filter by. */
	readonly type__in?: string;

	/** A query to search anime by title. */
	readonly search?: string;

	/** Columns to sort anime by. */
	readonly ordering?: string;
};
