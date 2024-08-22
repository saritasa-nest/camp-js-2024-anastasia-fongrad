import { AnimeStudio } from '@js-camp/core/models/studio.model';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { StudioDto } from '@js-camp/core/dtos/studio.dto';
import { StudioMapper } from '@js-camp/core/mappers/studio.mapper';

import { http } from '..';

const url = 'anime/studios/';

export namespace StudiosService {

	/** Fetches a list of studios.  */
	export async function fetchStudios(): Promise<AnimeStudio[]> {
		const { data } = await http.get<PaginationDto<StudioDto>>(url);
		return data.results.map(dto => StudioMapper.fromDto(dto));
	}
}
