/** Studios data DTO. */
export type AnimeStudiosDataDto = {

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

	/** Image url. */
	readonly image: string;
};
