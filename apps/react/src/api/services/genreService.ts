import { AnimeGenre } from '@js-camp/core/models/genre.model';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { GenreDto } from '@js-camp/core/dtos/genre.dto';
import { GenreMapper } from '@js-camp/core/mappers/genre.mapper';
import { PaginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { http } from '..';
import { Pagination } from '@js-camp/core/models/pagination.model';

const url = 'anime/genres/';

export namespace GenresService {
	/** Fetches a list of genres. */
	export async function fetchGenres(): Promise<Pagination<AnimeGenre>> {
		const { data } = await http.get<PaginationDto<GenreDto>>(url);
		return PaginationMapper.fromDto(data, GenreMapper.fromDto);
	}
}
