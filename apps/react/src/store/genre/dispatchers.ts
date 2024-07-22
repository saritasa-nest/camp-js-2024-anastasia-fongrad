import { createAsyncThunk } from '@reduxjs/toolkit';

import { GenresService } from '../../api/services/genreService';

/** 1. */
export const fetchGenres = createAsyncThunk(
	'genres/fetch',
	() => GenresService.fetchGenres(),
);
