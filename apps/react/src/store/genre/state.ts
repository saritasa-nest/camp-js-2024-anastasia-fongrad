import { AnimeGenre } from '@js-camp/core/models/genre.model';

/** Genres state. */
export type GenresState = {
	/** Genres list. */
	readonly genres: AnimeGenre[];

	/** Error. */
	readonly error?: string;

	/** Whether the genres are loading or not. */
	readonly isLoading: boolean;

	/** Has next is having next genres to fetch or not. */
	readonly hasNext: string | null;
};

/** Initial state for the genres slice of the Redux store. */
export const initialState: GenresState = {
	isLoading: false,
	genres: [],
	hasNext: null,
};
