import { createSlice } from '@reduxjs/toolkit';

import { fetchStudios } from './dispatchers';
import { initialState } from './state';

/** Slice of the Redux store for managing studios data. */
export const studiosSlice = createSlice({
	name: 'studios',
	initialState,
	reducers: {
		updateCursor(state) {
			state.cursor = state.nextCursor;
		},
		resetCursor(state) {
			state.cursor = '';
		},
		setPaginationEvent(state, action) {
			state.isPaginationEvent = action.payload;
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload;
		},
		setOrdering(state, action) {
			state.ordering = action.payload;
		},
	},
	extraReducers: builder => builder
		.addCase(fetchStudios.pending, state => {
			state.isLoading = true;
		})
		.addCase(fetchStudios.fulfilled, (state, action) => {
			const { results, nextCursor } = action.payload;
			state.studios = state.isPaginationEvent ? [...state.studios, ...results] : [...results];
			state.nextCursor = nextCursor;
			state.hasMoreData = nextCursor !== null;
			state.isLoading = false;
			state.isPaginationEvent = false;
		})
		.addCase(fetchStudios.rejected, (state, action) => {
			if (action.error.message) {
				state.error = action.error.message;
			}
			state.isLoading = false;
		}),
});

/** Studios slice actions. */
export const { updateCursor, resetCursor, setPaginationEvent, setSearchValue, setOrdering } = studiosSlice.actions;
