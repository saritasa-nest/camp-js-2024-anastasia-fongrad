import { UserProfile } from '@js-camp/core/models/user-profile.model';

/** Genres state. */
export type UserProfileState = {

	/** Genres list. */
	readonly userProfile: UserProfile | null;

	/** 1. */
	readonly isAuthorized: boolean;

	/** Error. */
	readonly error?: string;

	/** Whether the genres are loading or not. */
	readonly isLoading: boolean;
};

/** Initial state for the genres slice of the Redux store. */
export const initialState: UserProfileState = {
	isLoading: false,
	isAuthorized: false,
	userProfile: null,
};
