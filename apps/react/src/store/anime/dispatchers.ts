import { createAsyncThunk } from '@reduxjs/toolkit';

import { AnimeService } from '@js-camp/react/api/services/animeService';

/** Async thunk action for fetching genres. */
export const fetchAnime = createAsyncThunk(
	'anime/fetch',
	() => AnimeService.fetchAnime(),
);
