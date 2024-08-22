import { createSlice } from '@reduxjs/toolkit';

import { fetchStudios } from './dispatchers';
import { initialState } from './state';

/** Slice of the Redux store for managing studios data. */
export const studiosSlice = createSlice({
	name: 'studios',
	initialState,
	reducers: {},
	extraReducers: builder => builder
		.addCase(fetchStudios.pending, state => {
			state.isLoading = true;
		})
		.addCase(fetchStudios.fulfilled, (state, action) => {
			state.studios = action.payload;
			state.isLoading = false;
		})
		.addCase(fetchStudios.rejected, (state, action) => {
			if (action.error.message) {
				state.error = action.error.message;
			}
			state.isLoading = false;
		}),
});
