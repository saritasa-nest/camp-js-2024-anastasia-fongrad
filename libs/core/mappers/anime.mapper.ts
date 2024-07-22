import { Anime } from '../models/anime';
import { AnimeDto } from '../dtos/anime.dto';
import { DtoStatus } from '../utils/enums/statusEnums';
import { DtoType } from '../utils/enums/typeEnums';

import { StatusMapper } from './anime-status.mapper';
import { TypeMapper } from './anime-type.mapper';

export namespace AnimeMapper {

	/**
	 * Maps anime dto to model.
	 * @param dto Anime dto.
	 */
	export function fromDto(dto: AnimeDto): Anime {
		return new Anime({
			id: dto.id,
			image: dto.image,
			titleEng: dto.title_eng,
			titleJpn: dto.title_jpn,
			startDate: dto.aired.start,
			type: TypeMapper.fromDto(dto.type as DtoType),
			status: StatusMapper.fromDto(dto.status as DtoStatus),
		});
	}
}
