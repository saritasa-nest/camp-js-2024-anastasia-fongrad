/** Anime DTO. */
export type AnimeQueryParametersDto = {

	/** 1. */
	readonly offset: number;

	/** 1. */
	readonly limit: number;

	/** 1. */
	readonly type: string | null;

	/** 1. */
	readonly search: string | null;

	/** 1. */
	readonly ordering: string | null;
};
