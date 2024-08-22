import { AnimeStudio } from '@js-camp/core/models/studio.model';

/** Studios state. */
export type StudiosState = {

	/** Studios list. */
	readonly studios: AnimeStudio[];

	/** Error. */
	readonly error?: string;

	/** Whether the studios are loading or not. */
	readonly isLoading: boolean;

	/** Number of current page. */
	readonly pageNumber: number;

	/** List sorting. */
	readonly sorting: string | null;
};

/** Initial state for the studios slice of the Redux store. */
export const initialState: StudiosState = {
	isLoading: false,
	pageNumber: 0,
	sorting: null,
	studios: [],
};
