import { createAsyncThunk } from '@reduxjs/toolkit';
import { GenresQueryParams } from '@js-camp/react/model/genres-query-params.model';

import { GenresService } from '../../api/services/genreService';

/** Async thunk action for fetching genres. */
export const fetchGenres = createAsyncThunk('genres/fetch', (params: GenresQueryParams.Combined) =>
	GenresService.fetchGenres(params));
