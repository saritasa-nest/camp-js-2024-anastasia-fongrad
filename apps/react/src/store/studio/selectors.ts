import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

/** Selects all studios from store. */
export const selectStudios = createSelector(
	(state: RootState) => state.studios.studios,
	studios => studios,
);

/** Selects next cursor. */
export const selectCursor = createSelector(
	(state: RootState) => state.studios.cursor,
	cursor => cursor,
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

/** Selects studio search value. */
export const selectSearchValue = createSelector(
	(state: RootState) => state.studios.searchValue,
	searchValue => searchValue,
);

/** Selects ordering. */
export const selectOrdering = createSelector(
	(state: RootState) => state.studios.ordering,
	ordering => ordering,
);
