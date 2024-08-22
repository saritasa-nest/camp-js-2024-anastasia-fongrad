import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

/** Selects all studios from store. */
export const selectStudios = createSelector(
	(state: RootState) => state.studios.studios,
	studios => studios,
);

/** Selects studios loading state. */
export const selectAreStudiosLoading = createSelector(
	(state: RootState) => state.studios.isLoading,
	isLoading => isLoading,
);

/** Selects next cursor. */
export const selectCursor = createSelector(
	(state: RootState) => state.studios.cursor,
	cursor => cursor,
);

/** Selects studio list sort direction. */
export const selectSortDirection = createSelector(
	(state: RootState) => state.studios.sortDirection,
	sortDirection => sortDirection,
);

/** Selects studio list sorting. */
export const selectSorting = createSelector(
	(state: RootState) => state.studios.sorting,
	sorting => sorting,
);

/** Selects studio list search value. */
export const selectSearchValue = createSelector(
	(state: RootState) => state.studios.searchValue,
	searchValue => searchValue,
);

/** Selects has more data value. */
export const selectHasMoreData = createSelector(
	(state: RootState) => state.studios.hasMoreData,
	hasMoreData => hasMoreData,
);

/** Selects it is pagination event or not. */
export const selectIsPaginationEvent = createSelector(
	(state: RootState) => state.studios.isPaginationEvent,
	isPaginationEvent => isPaginationEvent,
);
