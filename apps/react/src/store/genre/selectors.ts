import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

/** Selects all genres from store. */
export const selectGenres = createSelector(
	(state: RootState) => state.genres.genres,
	genres => genres,
);

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

/** Select genres has more state. */
export const selectGenresError = createSelector(
	(state: RootState) => state.genres.error,
	error => error,
);
