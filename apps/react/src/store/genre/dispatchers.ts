import { createAsyncThunk } from '@reduxjs/toolkit';

import { GenresService } from '../../api/services/genreService';
import { BaseQueryParams } from '@js-camp/react/model/base-query-params.model';

/** Async thunk action for fetching genres. */
export const fetchGenres = createAsyncThunk('genres/fetch', (params: BaseQueryParams.Combined) =>
	GenresService.fetchGenres(params)
);
