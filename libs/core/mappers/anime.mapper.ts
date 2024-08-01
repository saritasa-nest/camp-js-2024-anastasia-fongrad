import { Anime } from '../models/anime.model';
import { AnimeDto } from '../dtos/anime.dto';

import { AnimeStatusMapper } from './anime-status.mapper';
import { AnimeTypeMapper } from './anime-type.mapper';

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
			type: AnimeTypeMapper.fromDto(dto.type),
			status: AnimeStatusMapper.fromDto(dto.status),
		});
	}
}
