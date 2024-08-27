import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

/** Selects all anime data from the store. */
export const selectAnime = createSelector(
	(state: RootState) => state.anime.anime,
	anime => anime,
);

/** Selects anime loading state. */
export const selectAreAnimeLoading = createSelector(
	(state: RootState) => state.anime.isLoading,
	isLoading => isLoading,
);

/** Selects the next anime page. */
export const selectAnimeNextPage = createSelector(
	(state: RootState) => state.anime.nextPage,
	nextPage => nextPage,
);

/** Selects current anime details. */
export const selectAnimeDetails = createSelector(
	(state: RootState) => state.anime.animeDetails,
	animeDetails => animeDetails,
);
