import { AnimeStudio } from '@js-camp/core/models/studio.model';

/** Studios state. */
export type StudiosState = {

	/** Studios list. */
	readonly studios: AnimeStudio[];

	/** Error. */
	readonly error?: string;

	/** Whether the studios are loading or not. */
	readonly isLoading: boolean;

	/** Pointer to current page. */
	readonly cursor: string | null;

	/** Pointer to next page. */
	readonly nextCursor: string | null;

	/** Is studio pagination event. */
	readonly isPaginationEvent: boolean;

	/** Studio search value. */
	readonly searchValue: string | null;

	/** Studio sorting. */
	readonly ordering: string | null;
};

/** Initial state for the studios slice of the Redux store. */
export const initialState: StudiosState = {
	isLoading: false,
	cursor: null,
	nextCursor: null,
	studios: [],
	isPaginationEvent: false,
	searchValue: null,
	ordering: null,
};
