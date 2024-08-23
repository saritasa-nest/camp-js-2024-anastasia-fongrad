import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

/** Selects a user profile from the store. */
export const selectUserProfile = createSelector(
	(state: RootState) => state.userProfile.userProfile,
	profile => profile,
);

/** Selects user profile loading state. */
export const selectIsUserProfileLoading = createSelector(
	(state: RootState) => state.userProfile.isLoading,
	isLoading => isLoading,
);

/** Selects user authorization state. */
export const selectIsUserAuthorized = createSelector(
	(state: RootState) => state.userProfile.isAuthorized,
	isAuthorized => isAuthorized,
);
