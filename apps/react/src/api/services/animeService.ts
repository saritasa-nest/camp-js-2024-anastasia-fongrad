import { Anime } from '@js-camp/core/models/anime.model';
import { Pagination } from '@js-camp/core/models/pagination.model';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { PaginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { AnimeDto } from '@js-camp/core/dtos/anime.dto';
import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { AnimeFilteringParameters } from '@js-camp/core/models/anime-filtering-parameters.model';
import { AnimeFilteringParametersMapper } from '@js-camp/core/mappers/anime-filtering-parameters.mapper';
import { ObjectUtils } from '@js-camp/core/utils/object-utils';
import { AppUrlConfig } from '@js-camp/react/utils/appUrlConfig';

import { http } from '..';

export namespace AnimeService {

	/**
	 * Gets paginated anime data from the server.
	 * @param parameters Query parameters for the request.
	 */
	export async function fetchAnime(parameters: Partial<AnimeFilteringParameters>): Promise<Pagination<Anime>> {
		const dtoParameters = ObjectUtils.removeEmptyFields(AnimeFilteringParametersMapper.toDto(parameters));
		const { data } = await http.get<PaginationDto<AnimeDto>>(
			AppUrlConfig.paths.animeList,
			{ params: dtoParameters },
		);
		return PaginationMapper.fromDto(data, dto => AnimeMapper.fromDto(dto));
	}

	/**
	 * Gets paginated anime data by its url.
	 * @param url Url for the request.
	 */
	export async function fetchAnimeByUrl(url: string): Promise<Pagination<Anime>> {
		const { data } = await http.get<PaginationDto<AnimeDto>>(url);
		return PaginationMapper.fromDto(data, dto => AnimeMapper.fromDto(dto));
	}
}
