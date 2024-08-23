import { UserProfile } from '@js-camp/core/models/user-profile.model';

/** User profile state. */
export type UserProfileState = {

	/** User profile. */
	readonly userProfile: UserProfile | null;

	/** User authorization status. */
	readonly isAuthorized: boolean;

	/** Error. */
	readonly error?: string;

	/** Whether the user profile is loading or not. */
	readonly isLoading: boolean;
};

/** Initial state for the user profile slice of the Redux store. */
export const initialState: UserProfileState = {
	isLoading: false,
	isAuthorized: false,
	userProfile: null,
};
