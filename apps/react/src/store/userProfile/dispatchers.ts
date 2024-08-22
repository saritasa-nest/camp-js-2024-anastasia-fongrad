import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserProfileService } from '@js-camp/react/api/services/userProfileService';

/** Async thunk action for fetching genres. */
export const fetchUserProfile = createAsyncThunk(
	'userProfile/fetch',
	() => UserProfileService.fetchGenres(),
);
