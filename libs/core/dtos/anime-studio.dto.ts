/** Anime studio DTO. */
export type AnimeStudioDto = {

	/** Id. */
	readonly id: number;

	/** Name. */
	readonly name: string;

	/**
	 * Creation date-time.
	 * @example '2024-07-22T02:40:54.873Z'.
	 */
	readonly created: string;

	/**
	 * Date-time of the last modification.
	 * @example '2024-07-22T02:40:54.873Z'.
	 */
	readonly modified: string;

	/** DTO type. */
	readonly image: string;
};
