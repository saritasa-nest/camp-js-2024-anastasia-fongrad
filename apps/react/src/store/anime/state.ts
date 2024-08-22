import { Anime } from '@js-camp/core/models/anime.model';

/** Anime state. */
export type AnimeState = {

	/** Anime list. */
	readonly anime: Anime[];

	/** Error. */
	readonly error?: string;

	/** Whether anime data is loading or not. */
	readonly isLoading: boolean;

	/** Url to get the next anime page. */
	readonly nextPage?: string;
};

/** Initial state for the anime slice of the Redux store. */
export const initialState: AnimeState = {
	isLoading: false,
	anime: [],
};
