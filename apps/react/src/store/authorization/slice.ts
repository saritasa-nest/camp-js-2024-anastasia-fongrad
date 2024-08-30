import { createSlice } from '@reduxjs/toolkit';

import { fetchAnime } from './dispatchers';
import { initialState } from './state';

/** Slice of the Redux store for managing anime data. */
export const animeSlice = createSlice({
	name: 'anime',
	initialState,
	reducers: {},
	extraReducers: builder => builder
		.addCase(fetchAnime.pending, state => {
			state.isLoading = true;
		})
		.addCase(fetchAnime.fulfilled, (state, action) => {
			const isScrolled = action.payload.previousPage != null;
			state.anime = [...(isScrolled ? state.anime : []), ...action.payload.results];
			state.nextPage = action.payload.nextPage ?? undefined;
			state.isLoading = false;
		})
		.addCase(fetchAnime.rejected, (state, action) => {
			if (action.error.message) {
				state.error = action.error.message;
			}
			state.isLoading = false;
		}),
});
