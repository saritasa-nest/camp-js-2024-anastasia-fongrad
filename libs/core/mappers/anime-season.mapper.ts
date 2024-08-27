import { AnimeSeasonDto } from '../dtos/enums/anime-season.dto';
import { AnimeSeason } from '../models/anime-season.model';

const FROM_DTO: Readonly<Record<AnimeSeasonDto, AnimeSeason>> = {
	[AnimeSeasonDto.FALL]: AnimeSeason.Fall,
	[AnimeSeasonDto.NON_SEASONAL]: AnimeSeason.NonSeasonal,
	[AnimeSeasonDto.SPRING]: AnimeSeason.Spring,
	[AnimeSeasonDto.SUMMER]: AnimeSeason.Summer,
	[AnimeSeasonDto.WINTER]: AnimeSeason.Winter,
};

export namespace AnimeSeasonMapper {

	/**
	 * Maps DTO to model.
	 * @param dto Anime season DTO.
	 */
	export function fromDto(dto: AnimeSeasonDto): AnimeSeason {
		return FROM_DTO[dto];
	}
}
