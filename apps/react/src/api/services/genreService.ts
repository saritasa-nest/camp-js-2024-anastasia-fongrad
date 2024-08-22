import { AnimeGenre } from '@js-camp/core/models/anime-genre.model';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { AnimeGenreDto } from '@js-camp/core/dtos/anime-genre.dto';
import { AnimeGenreMapper } from '@js-camp/core/mappers/anime-genre.mapper';

import { http } from '..';

const url = 'anime/genres/';

export namespace GenresService {

	/** Fetches a list of genres. */
	export async function fetchGenres(): Promise<AnimeGenre[]> {
		const { data } = await http.get<PaginationDto<AnimeGenreDto>>(url);
		return data.results.map(dto => AnimeGenreMapper.fromDto(dto));
	}
}
