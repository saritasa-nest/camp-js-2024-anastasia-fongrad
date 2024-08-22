import { StudiosService } from '@js-camp/react/api/services/studioService';
import { createAsyncThunk } from '@reduxjs/toolkit';

/** Async thunk action for fetching studios. */
export const fetchStudios = createAsyncThunk(
	'studios/fetch',
	() => StudiosService.fetchStudios(),
);
