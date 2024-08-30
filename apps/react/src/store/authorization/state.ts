import { ServerError } from '@js-camp/core/models/server-error.model';

/** Anime state. */
export type AnimeState = {

	/** Error. */
	readonly error?: ServerError;

	/** Whether anime data is loading or not. */
	readonly isLoading: boolean;
};

/** Initial state for the anime slice of the Redux store. */
export const initialState: AnimeState = {
	isLoading: false,
};
