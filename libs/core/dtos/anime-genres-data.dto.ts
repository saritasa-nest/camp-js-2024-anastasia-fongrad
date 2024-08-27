/** Genres data DTO. */
export type AnimeGenresDataDto = {

	/** Id. */
	readonly id: number;

	/**
	 * Created.
	 * String in ISO date format.
	 * */
	readonly created: string;

	/**
	 * Modified.
	 * String in ISO date format.
	 * */
	readonly modified: string;

	/** Name. */
	readonly name: string;

	/** Type. */
	readonly type: string;
};
