import { createSlice } from '@reduxjs/toolkit';

import { fetchGenres } from './dispatchers';
import { initialState } from './state';

/** Slice of the Redux store for managing genres data. */
export const genresSlice = createSlice({
	name: 'genres',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(fetchGenres.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchGenres.fulfilled, (state, action) => {
				state.genres = [...action.payload.results];
				state.hasNext = action.payload.nextPage === null;
				state.isLoading = false;
			})
			.addCase(fetchGenres.rejected, (state, action) => {
				if (action.error.message) {
					state.error = action.error.message;
				}
				state.isLoading = false;
			}),
});
