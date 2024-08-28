import { AnimeGenre } from '@js-camp/core/models/anime-genre.model';
import { PaginationListCursorDto } from '@js-camp/core/dtos/pagination.dto';
import { AnimeGenreDto } from '@js-camp/core/dtos/anime-genre.dto';
import { GenreMapper } from '@js-camp/core/mappers/genre.mapper';

import { PaginationListCursor } from '@js-camp/core/models/pagination-list-cursor.model';
import { PaginationListCursorMapper } from '@js-camp/core/mappers/pagination-list-cursor.mapper';

import { GenresQueryParams } from '@js-camp/react/model/genres-query-params.model';
import { GenresFilterParamsMapper } from '@js-camp/react/mapper/genres-filter-params.mapper';

import { AnimeGenreMapper } from '@js-camp/core/mappers/anime-genre.mapper';

import { http } from '..';
const url = 'anime/genres/list-cursor/';
const urlById = 'anime/genres/';

export namespace GenresService {

	/**
	 * Fetches a list of genres.
	 * @param params Params from UI.
	 */
	export async function fetchGenres(params: GenresQueryParams.Combined): Promise<PaginationListCursor<AnimeGenre>> {
		const dtoParam = GenresFilterParamsMapper.toDto(params);
		const { data } = await http.get<PaginationListCursorDto<AnimeGenreDto>>(url, { params: dtoParam });
		return PaginationListCursorMapper.fromDto(data, GenreMapper.fromDto);
	}

	/**
	 * Fetches a genres by id.
	 * @param params Params from UI.
	 */
	export async function fetchGenreById(params: number): Promise<AnimeGenre> {
		const { data } = await http.get<AnimeGenreDto>(`${urlById}${params}/`);
		return AnimeGenreMapper.fromDto(data);
	}
}
