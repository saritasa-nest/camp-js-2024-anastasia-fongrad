import { createAsyncThunk } from '@reduxjs/toolkit';
import { AnimeService } from '@js-camp/react/api/services/animeService';
import { AnimeQueryParameters } from '@js-camp/core/models/anime-query-parameters.model';

/** Async thunk action for fetching genres. */
export const fetchAnime = createAsyncThunk(
	'anime/fetch',
	(parameters: Partial<AnimeQueryParameters>) => AnimeService.fetchAnime(parameters),
);
