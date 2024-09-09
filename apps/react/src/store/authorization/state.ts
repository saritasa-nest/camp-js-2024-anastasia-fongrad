import { ServerError } from '@js-camp/core/models/server-error.model';

/** Anime state. */
export type AuthorizationState = {

	/** Error. */
	readonly error?: ServerError[];

	/** Whether authorization is loading or not. */
	readonly isLoading: boolean;
};

/** Initial state for the anime slice of the Redux store. */
export const initialState: AuthorizationState = {
	isLoading: false,
};
