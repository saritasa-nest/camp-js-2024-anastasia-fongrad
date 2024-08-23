import { createSlice } from '@reduxjs/toolkit';

import { fetchUserProfile } from './dispatchers';
import { initialState } from './state';

/** Slice of the Redux store for managing genres data. */
export const userProfileSlice = createSlice({
	name: 'userProfile',
	initialState,
	reducers: {},
	extraReducers: builder => builder
		.addCase(fetchUserProfile.pending, state => {
			state.isLoading = true;
		})
		.addCase(fetchUserProfile.fulfilled, (state, action) => {
			state.userProfile = action.payload;
			state.isAuthorized = action.payload != null;
			state.isLoading = false;
		})
		.addCase(fetchUserProfile.rejected, (state, action) => {
			if (action.error.message) {
				state.error = action.error.message;
			}
			state.isLoading = false;
		}),
});
