import { AnimeDetails } from '@js-camp/core/models/anime-details.model';
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

	/** Selected anime details. */
	readonly animeDetails: AnimeDetails | null;
};

/** Initial state for the anime slice of the Redux store. */
export const initialState: AnimeState = {
	isLoading: false,
	anime: [],
	animeDetails: null,
};
