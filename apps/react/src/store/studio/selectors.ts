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

/** Selects studios page number. */
export const selectStudiosPageNumber = createSelector(
	(state: RootState) => state.studios.pageNumber,
	pageNumber => pageNumber,
);

/** Selects studio list sorting. */
export const selectSorting = createSelector(
	(state: RootState) => state.studios.sorting,
	sorting => sorting,
);
