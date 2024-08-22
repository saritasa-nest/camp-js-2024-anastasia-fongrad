import { AnimeGenre } from '@js-camp/core/models/genre.model';
import { PaginationListCursorDto } from '@js-camp/core/dtos/pagination.dto';
import { GenreDto } from '@js-camp/core/dtos/genre.dto';
import { GenreMapper } from '@js-camp/core/mappers/genre.mapper';

import { PaginationListCursor } from '@js-camp/core/models/pagination-list-cursor.model';
import { PaginationListCursorMapper } from '@js-camp/core/mappers/pagination-list-cursor.mapper';

import { http } from '..';
import { GenresQueryParams } from '@js-camp/react/model/genres-query-params.model';
import { GenresFilterParamsMapper } from '@js-camp/react/mapper/genres-filter-params.mapper';

const url = 'anime/genres/list-cursor/';

export namespace GenresService {

	/**
	 * Fetches a list of genres.
	 * @param params
	 */
	export async function fetchGenres(params: GenresQueryParams.Combined): Promise<PaginationListCursor<AnimeGenre>> {
		const dtoParam = GenresFilterParamsMapper.toDto(params);
		console.log("dtoParam",dtoParam)
		const { data } = await http.get<PaginationListCursorDto<GenreDto>>(url, { params });
		return PaginationListCursorMapper.fromDto(data, GenreMapper.fromDto);
	}
}
