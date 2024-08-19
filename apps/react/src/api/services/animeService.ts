import { Anime } from '@js-camp/core/models/anime.model';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { AnimeDto } from '@js-camp/core/dtos/anime.dto';
import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { AnimeQueryParameters } from '@js-camp/core/models/anime-query-parameters.model';
import { AnimeQueryParametersMapper } from '@js-camp/core/mappers/anime-query-parameters.mapper';
import { ObjectUtils } from '@js-camp/core/utils/object-utils';

import { http } from '..';

const url = 'anime/anime/';

export namespace AnimeService {

	/**
	 * Gets paginated anime data from the server.
	 * @param parameters Query parameters for the request.
	 */
	export async function fetchAnime(parameters: Partial<AnimeQueryParameters>): Promise<Anime[]> {
		const dtoParameters = ObjectUtils.removeEmptyFields(AnimeQueryParametersMapper.toDto(parameters));
		const { data } = await http.get<PaginationDto<AnimeDto>>(url, { params: dtoParameters });
		return data.results.map(dto => AnimeMapper.fromDto(dto));
	}
}
