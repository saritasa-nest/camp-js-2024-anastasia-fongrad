import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

/** Selects all genres from store. */
export const selectUserProfile = createSelector(
	(state: RootState) => state.userProfile.userProfile,
	profile => profile,
);

/** Selects genres loading state. */
export const selectIsUserProfileLoading = createSelector(
	(state: RootState) => state.userProfile.isLoading,
	isLoading => isLoading,
);

/** 1. */
export const selectIsUserAuthorized = createSelector(
	(state: RootState) => state.userProfile.isAuthorized,
	isAuthorized => isAuthorized,
);
