import { StudioQueryParameters } from '@js-camp/core/models/studio-query-parameters.model';
import { StudiosService } from '@js-camp/react/api/services/studioService';
import { createAsyncThunk } from '@reduxjs/toolkit';

/** Async thunk action for fetching studios. */
export const fetchStudios = createAsyncThunk(
	'studios/fetch',
	(queryParams: StudioQueryParameters) => StudiosService.fetchStudios(queryParams),
);
