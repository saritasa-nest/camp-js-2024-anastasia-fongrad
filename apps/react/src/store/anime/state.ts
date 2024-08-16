import { Anime } from "@js-camp/core/models/anime.model";

/** Genres state. */
export type AnimeState = {

	/** Genres list. */
	readonly anime: Anime[];

	/** Error. */
	readonly error?: string;

	/** Whether the genres are loading or not. */
	readonly isLoading: boolean;
};

/** Initial state for the genres slice of the Redux store. */
export const initialState: AnimeState = {
	isLoading: false,
	anime: [],
};
