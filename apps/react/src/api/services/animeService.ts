import { Anime } from '@js-camp/core/models/anime.model';
import { Pagination } from '@js-camp/core/models/pagination.model';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { PaginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { AnimeDto } from '@js-camp/core/dtos/anime.dto';
import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { AnimeListCursorQueryParameters } from '@js-camp/core/models/anime-list-cursor-query-parameters.model';
import { AnimeListCursorQueryParametersMapper } from '@js-camp/core/mappers/anime-list-cursor-query-parameters.mapper';
import { ObjectUtils } from '@js-camp/core/utils/object-utils';

import { http } from '..';

const animeCursorUrl = 'anime/anime/list-cursor/';

export namespace AnimeService {

	/**
	 * Gets paginated anime data from the server.
	 * @param parameters Query parameters for the request.
	 */
	export async function fetchAnime(parameters: Partial<AnimeListCursorQueryParameters>): Promise<Pagination<Anime>> {
		const dtoParameters = ObjectUtils.removeEmptyFields(AnimeListCursorQueryParametersMapper.toDto(parameters));
		const { data } = await http.get<PaginationDto<AnimeDto>>(animeCursorUrl, { params: dtoParameters });
		return PaginationMapper.fromDto(data, dto => AnimeMapper.fromDto(dto));
	}

	/**
	 * 1.
	 * @param url 1.
	 */
	export async function fetchAnimeByUrl(url: string): Promise<Pagination<Anime>> {
		const { data } = await http.get<PaginationDto<AnimeDto>>(url);
		return PaginationMapper.fromDto(data, dto => AnimeMapper.fromDto(dto));
	}
}
