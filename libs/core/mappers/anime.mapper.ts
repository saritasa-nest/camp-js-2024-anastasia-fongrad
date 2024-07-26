import { Anime } from '../models/anime';
import { AnimeDto } from '../dtos/anime.dto';
import { DtoStatus } from '../utils/enums/dto-status.enum';
import { DtoType } from '../utils/enums/dto-type.enum';

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
			imageUrl: dto.image,
			titleEnglish: dto.title_eng,
			titleJapanese: dto.title_jpn,
			startDate: dto.aired.start ? new Date(dto.aired.start) : null,
			type: TypeMapper.fromDto(dto.type as DtoType),
			status: StatusMapper.fromDto(dto.status as DtoStatus),
		});
	}
}
