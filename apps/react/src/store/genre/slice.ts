import { createSlice } from '@reduxjs/toolkit';

import { fetchGenreById, fetchGenres } from './dispatchers';
import { initialState } from './state';
import { genresAdapter } from './genresAdapter';

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
				const isScrolled = action.payload.previousPage != null;
				if (isScrolled) {
					genresAdapter.addMany(state as typeof initialState, action.payload.results);
				} else {
					genresAdapter.setAll(state as typeof initialState, action.payload.results);
				}
				state.hasNext = action.payload.nextPage;
				state.isLoading = false;
			})
			.addCase(fetchGenres.rejected, (state, action) => {
				if (action.error.message) {
					state.error = action.error.message;
				}
				state.isLoading = false;
			})
			.addCase(fetchGenreById.pending, state => {
				state.isLoading = true;
			})
			.addCase(fetchGenreById.fulfilled, (state, action) => {
				console.log(action.payload)
				state.genreDetails = action.payload;
				state.isLoading = false;
			}),
});
