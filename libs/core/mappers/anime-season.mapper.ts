import { EnumUtils } from '../utils/enum-utils';
import { AnimeSeasonDto } from '../dtos/enums/anime-season-dto.enum';
import { AnimeSeason } from '../models/enums/anime-season.enum';

export namespace AnimeSeasonMapper {

	/**
	 * Converts anime sort parameters from a dto object to a model.
	 * @param dto Anime sort parameters dto.
	 */
	export function fromDto(dto: AnimeSeasonDto): AnimeSeason {
		const statusMap = EnumUtils.createEnumMap(AnimeSeasonDto, AnimeSeason);
		return statusMap[dto];
	}
}
