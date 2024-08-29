import { AnimeGenre } from '@js-camp/core/models/anime-genre.model';
import { createEntityAdapter } from '@reduxjs/toolkit';

/** Genres entity adapter. */
export const genresAdapter = createEntityAdapter<AnimeGenre>({
	selectId: genres => genres.id,
});

/** Export selectors. */
export const { selectAll: selectAllGenres } = genresAdapter.getSelectors(
	(state: { genres: ReturnType<typeof genresAdapter.getInitialState>; }) => state.genres,
);
