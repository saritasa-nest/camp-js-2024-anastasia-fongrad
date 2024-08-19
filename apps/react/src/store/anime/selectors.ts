import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

/** Selects all genres from store. */
export const selectAnime = createSelector(
	(state: RootState) => state.anime.anime,
	anime => anime,
);

/** Selects genres loading state. */
export const selectAreAnimeLoading = createSelector(
	(state: RootState) => state.anime.isLoading,
	isLoading => isLoading,
);

/** Select genres has more state. */
export const selectAnimeHasMore = createSelector(
	(state: RootState) => state.anime.hasMore,
	hasMore => hasMore,
);
