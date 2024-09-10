import { AnimeGenre } from '@js-camp/core/models/genre.model';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { GenreDto } from '@js-camp/core/dtos/genre.dto';
import { GenreMapper } from '@js-camp/core/mappers/genre.mapper';
import { AppUrlConfig } from '@js-camp/react/utils/appUrlConfig';

import { http } from '..';

export namespace GenresService {

	/** Fetches a list of genres. */
	export async function fetchGenres(): Promise<AnimeGenre[]> {
		const url = AppUrlConfig.paths.genresList;
		const { data } = await http.get<PaginationDto<GenreDto>>(url);
		return data.results.map(dto => GenreMapper.fromDto(dto));
	}
}
