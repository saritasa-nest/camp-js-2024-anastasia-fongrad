import { createEntityAdapter, EntityState } from '@reduxjs/toolkit';
import { AnimeGenre } from '@js-camp/core/models/anime-genre.model';

/** Adapter for genres. */
const genresAdapter = createEntityAdapter<AnimeGenre>({

	// Assuming AnimeGenre has an `id` field

	selectId: genre => genre.id,
});

/** Genres state. */
export type GenresState = EntityState<AnimeGenre> & {

	/** Error. */
	readonly error?: string;

	/** Whether the genres are loading or not. */
	readonly isLoading: boolean;

	/** Has next is having next genres to fetch or not. */
	readonly hasNext: string | null;

	/** Anime details. */
	genreDetails: AnimeGenre | null;

	/** Anime detail error. */
	genreDetailsError?: string;
};

/** Initial state for the genres slice of the Redux store. */
export const initialState: GenresState = genresAdapter.getInitialState({
	isLoading: false,
	error: undefined,
	hasNext: null,
	genreDetails: null,
	genreDetailsError: undefined,
});
