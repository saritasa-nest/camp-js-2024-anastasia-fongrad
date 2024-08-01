import { Pagination } from '../models/pagination.model';
import { PaginationDto } from '../dtos/pagination.dto';
import { Anime } from '../models/anime.model';
import { AnimeDto } from '../dtos/anime.dto';

import { AnimeMapper } from './anime.mapper';

export namespace PaginationMapper {

	/**
	 * Maps anime dto to model.
	 * @param dto Anime dto.
	 */
	export function fromDto(dto: PaginationDto<AnimeDto>): Pagination<Anime> {
		return new Pagination<Anime>({
			totalCount: dto.count,
			nextPage: dto.next,
			previousPage: dto.previous,
			results: dto.results.map(result => AnimeMapper.fromDto(result)),
		});
	}
}
