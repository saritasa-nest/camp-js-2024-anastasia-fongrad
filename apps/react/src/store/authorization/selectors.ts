import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

/** Selects an authorization error. */
export const selectAuthorizationError = createSelector(
	(state: RootState) => state.authorization.error,
	error => error,
);

/** Selects authorization loading state. */
export const selectAuthorizationLoading = createSelector(
	(state: RootState) => state.anime.nextPage,
	nextPage => nextPage,
);
