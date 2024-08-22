import { createSlice } from '@reduxjs/toolkit';

import { fetchStudios } from './dispatchers';
import { initialState } from './state';

/** Slice of the Redux store for managing studios data. */
export const studiosSlice = createSlice({
	name: 'studios',
	initialState,
	reducers: {
		changeSortDirection(state, action) {
			state.sortDirection = action.payload;
		},
		changeSorting(state, action) {
			state.sorting = action.payload;
		},
		changeSearchValue(state, action) {
			state.searchValue = action.payload;
		},
	},
	extraReducers: builder => builder
		.addCase(fetchStudios.pending, state => {
			state.isLoading = true;
		})
		.addCase(fetchStudios.fulfilled, (state, action) => {
			const { results, nextCursor } = action.payload;
			state.studios = [...results];
			state.previousCursor = state.cursor;
			state.cursor = state.nextCursor;
			state.nextCursor = nextCursor;
			state.isLoading = false;
		})
		.addCase(fetchStudios.rejected, (state, action) => {
			if (action.error.message) {
				state.error = action.error.message;
			}
			state.isLoading = false;
		}),
});

/** Studios slice actions. */
export const { changeSortDirection, changeSorting, changeSearchValue } = studiosSlice.actions;
