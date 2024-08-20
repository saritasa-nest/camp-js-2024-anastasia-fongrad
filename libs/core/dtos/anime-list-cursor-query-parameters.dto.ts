/** Anime query parameters DTO. */
export type AnimeListCursorQueryParametersDto = {

	/** 1. */
	readonly cursor?: string;

	/** Anime types to filter by. */
	readonly type__in?: string;

	/** A query to search anime by title. */
	readonly search?: string;

	/** Columns to sort anime by. */
	readonly ordering?: string;
};
