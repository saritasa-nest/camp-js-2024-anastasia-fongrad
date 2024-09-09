import { createSlice } from '@reduxjs/toolkit';
import { HandleErrorsService } from '@js-camp/react/api/services/handleErrorsService';

import { loginUser, registerUser } from './dispatchers';
import { initialState } from './state';

/** Slice of the Redux store for managing user authorization data. */
export const authorizationSlice = createSlice({
	name: 'authorization',
	initialState,
	reducers: {},
	extraReducers: builder => builder
		.addCase(loginUser.pending, state => {
			state.isLoading = true;
		})
		.addCase(loginUser.fulfilled, (state, _action) => {
			state.isLoading = false;
		})
		.addCase(loginUser.rejected, (state, action) => {
			if (action.error.message) {
				state.error = HandleErrorsService.parseError(action.error);
			}
			state.isLoading = false;
		})
		.addCase(registerUser.pending, state => {
			state.isLoading = true;
		})
		.addCase(registerUser.fulfilled, (state, _action) => {
			state.isLoading = false;
		})
		.addCase(registerUser.rejected, (state, action) => {
			if (action.error.message) {
				state.error = HandleErrorsService.parseError(action.error);
			}
			state.isLoading = false;
		}),
});
