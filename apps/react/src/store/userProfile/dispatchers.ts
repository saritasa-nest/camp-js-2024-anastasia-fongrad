import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserProfileService } from '@js-camp/react/api/services/userProfileService';

/** Async thunk action for fetching a user profile. */
export const fetchUserProfile = createAsyncThunk(
	'userProfile/fetch',
	() => UserProfileService.fetchUserProfile(),
);
