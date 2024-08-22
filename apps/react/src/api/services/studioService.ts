import { AnimeStudio } from '@js-camp/core/models/studio.model';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { StudioDto } from '@js-camp/core/dtos/studio.dto';
import { StudioMapper } from '@js-camp/core/mappers/studio.mapper';
import { StudioQueryParameters } from '@js-camp/core/models/studio-query-parameters.model';
import { StudioQueryParametersMapper } from '@js-camp/core/mappers/studio-query-parameters.mapper';

import { http } from '..';

const url = 'anime/studios/';

export namespace StudiosService {

	/**
	 * Fetches list of studios.
	 * @param queryParams Studio query parameters.
	 * @returns
	 */
	export async function fetchStudios(queryParams: StudioQueryParameters): Promise<AnimeStudio[]> {
		const { data } = await http.get<PaginationDto<StudioDto>>(url, {
			params: StudioQueryParametersMapper.toDto(queryParams),
		});
		return data.results.map(dto => StudioMapper.fromDto(dto));
	}
}
