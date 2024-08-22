import { AnimeStudio } from '@js-camp/core/models/studio.model';

/** Studios state. */
export type StudiosState = {

	/** Studios list. */
	readonly studios: AnimeStudio[];

	/** Error. */
	readonly error?: string;

	/** Whether the studios are loading or not. */
	readonly isLoading: boolean;

	/** Pointer to previous page. */
	readonly previousCursor: string | null;

	/** Pointer to current page. */
	readonly cursor: string | null;

	/** Pointer to next page. */
	readonly nextCursor: string | null;

	/** List sorting. */
	readonly sorting: string | null;

	/** Sorting direction. */
	readonly sortDirection: 'asc' | 'desc';

	/** Studio name search value. */
	readonly searchValue: string | null;

	/** Is studio pagination event. */
	readonly isPaginationEvent: boolean;
};

/** Initial state for the studios slice of the Redux store. */
export const initialState: StudiosState = {
	isLoading: false,
	previousCursor: null,
	cursor: null,
	nextCursor: null,
	sortDirection: 'asc',
	sorting: null,
	studios: [],
	searchValue: null,
	isPaginationEvent: false,
};
