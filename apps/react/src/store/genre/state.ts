import { Genre } from '@js-camp/core/models/genre';

/** Genres state. */
export type GenresState = {

	/** Genres list. */
	readonly genres: Genre[];

	/** Error. */
	readonly error?: string;

	/** Whether the genres are loading or not. */
	readonly isLoading: boolean;
};

/** 1. */
export const initialState: GenresState = {
	isLoading: false,
	genres: [],
};
