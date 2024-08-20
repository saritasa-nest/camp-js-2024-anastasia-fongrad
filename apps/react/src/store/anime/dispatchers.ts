import { createAsyncThunk } from '@reduxjs/toolkit';
import { AnimeService } from '@js-camp/react/api/services/animeService';
import { AnimeQueryParameters } from '@js-camp/core/models/anime-query-parameters.model';

/** Async thunk action for fetching anime. */
export const fetchAnime = createAsyncThunk(
	'anime/fetch',
	(parameters: Partial<AnimeQueryParameters>) => AnimeService.fetchAnime(parameters),
);

/** Async thunk action for fetching the next anime page. */
export const fetchAnimeNext = createAsyncThunk(
	'anime/fetch',
	(nextUrl: string) => AnimeService.fetchAnimeByUrl(nextUrl),
);
