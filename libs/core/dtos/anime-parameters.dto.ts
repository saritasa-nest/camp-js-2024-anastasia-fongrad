/** Anime DTO. */
export type AnimeQueryParametersDto = Readonly<{

	/** 1. */
	offset: number;

	/** 1. */
	limit: number;

	/** 1. */
	type?: string;

	/** 1. */
	search?: string;

	/** 1. */
	ordering?: string;
}>;
