import { AnimeGenre } from '@js-camp/core/models/genre.model';
import { PaginationListCursorDto } from '@js-camp/core/dtos/pagination.dto';
import { GenreDto } from '@js-camp/core/dtos/genre.dto';
import { GenreMapper } from '@js-camp/core/mappers/genre.mapper';

import { PaginationListCursor } from '@js-camp/core/models/pagination-list-cursor.model';
import { PaginationListCursorMapper } from '@js-camp/core/mappers/pagination-list-cursor.mapper';
import { BaseQueryParams } from '@js-camp/react/model/base-query-params.model';
import { BaseFilterParamsDto } from '@js-camp/react/dto/base-filter-params.model';

import { http } from '..';

const url = 'anime/genres/list-cursor/';

export namespace GenresService {

	/**
	 * Fetches a list of genres.
	 * @param params
	 */
	export async function fetchGenres(params: BaseFilterParamsDto.Combined): Promise<PaginationListCursor<AnimeGenre>> {
		const { data } = await http.get<PaginationListCursorDto<GenreDto>>(url, { params });
		return PaginationListCursorMapper.fromDto(data, GenreMapper.fromDto);
	}
}
