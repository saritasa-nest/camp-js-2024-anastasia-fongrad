import { Anime } from '../models/anime';
import { AnimeDto } from '../dtos/anime.dto';

export namespace AnimeMapper {

	/**
	 * Maps dto to model.
	 * @param dto Genre dto.
	 */
	export function fromDto(dto: AnimeDto): Anime {
		return new Anime({
			id: dto.id,
			image: dto.image,
			titleEng: dto.title_eng,
			titleJpn: dto.title_jpn,
			startDate: dto.aired.start,
			type: dto.type,
			status: dto.status,
		});
	}
}
