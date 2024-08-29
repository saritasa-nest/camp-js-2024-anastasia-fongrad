import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

import { genresAdapter } from './genresAdapter';

/** Selects all genres from store. */
export const selectGenres = genresAdapter.getSelectors((state: RootState) => state.genres).selectAll;

/** Selects genres loading state. */
export const selectAreGenresLoading = createSelector(
	(state: RootState) => state.genres.isLoading,
	isLoading => isLoading,
);

/** Select genres has more state. */
export const selectGenresHasNext = createSelector(
	(state: RootState) => state.genres.hasNext,
	hasNext => hasNext,
);

/** Select genres has error state. */
export const selectGenresError = createSelector(
	(state: RootState) => state.genres.error,
	error => error,
);

/** Select genre has detail state. */
export const selectGenreDetail = createSelector(
	(state: RootState) => state.genres.genreDetails,
	genreDetails => genreDetails,
);
