import { createSlice } from '@reduxjs/toolkit';

import { fetchAnime, fetchAnimeById, fetchAnimeNext } from './dispatchers';
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
		})
		.addCase(fetchAnimeNext.pending, state => {
			state.isLoading = true;
		})
		.addCase(fetchAnimeNext.fulfilled, (state, action) => {
			const isScrolled = action.payload.previousPage != null;
			state.anime = [...(isScrolled ? state.anime : []), ...action.payload.results];
			state.nextPage = action.payload.nextPage ?? undefined;
			state.isLoading = false;
		})
		.addCase(fetchAnimeNext.rejected, (state, action) => {
			if (action.error.message) {
				state.error = action.error.message;
			}
			state.isLoading = false;
		})
		.addCase(fetchAnimeById.pending, state => {
			state.isLoading = true;
		})
		.addCase(fetchAnimeById.fulfilled, (state, action) => {
			state.animeDetails = {
				...action.payload,
				studios: [...action.payload.studios],
				studiosData: [...action.payload.studiosData],
				genres: [...action.payload.genres],
				genresData: [...action.payload.genresData],
			};
			state.isLoading = false;
		})
		.addCase(fetchAnimeById.rejected, (state, action) => {
			if (action.error.message) {
				state.error = action.error.message;
			}
			state.isLoading = false;
		}),
});
