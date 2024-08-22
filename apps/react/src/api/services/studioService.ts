import { AnimeStudio } from '@js-camp/core/models/studio.model';
import { StudioDto } from '@js-camp/core/dtos/studio.dto';
import { StudioMapper } from '@js-camp/core/mappers/studio.mapper';
import { StudioQueryParameters } from '@js-camp/core/models/studio-query-parameters.model';
import { StudioQueryParametersMapper } from '@js-camp/core/mappers/studio-query-parameters.mapper';
import { ListCursorPaginationDto } from '@js-camp/core/dtos/list-cursor-pagination.dto';
import { ListCursorPaginationMapper } from '@js-camp/core/mappers/list-cursor-pagination.mapper';
import { ListCursorPagination } from '@js-camp/core/models/list-cursor-pagination.model';

import { http } from '..';

const url = 'anime/studios/list-cursor/';

export namespace StudiosService {

	/**
	 * Fetches list of studios.
	 * @param queryParams Studio query parameters.
	 * @returns
	 */
	export async function fetchStudios(queryParams: StudioQueryParameters): Promise<ListCursorPagination<AnimeStudio>> {
		const { data } = await http.get<ListCursorPaginationDto<StudioDto>>(url, {
			params: StudioQueryParametersMapper.toDto(queryParams),
		});
		return ListCursorPaginationMapper.fromDto(data, StudioMapper.fromDto);
	}
}
