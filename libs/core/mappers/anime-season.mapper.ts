import { EnumUtils } from '../utils/enum-utils';
import { AnimeSeasonDto } from '../dtos/enums/anime-season-dto.enum';
import { AnimeSeason } from '../models/enums/anime-season.enum';

export namespace AnimeSeasonMapper {

	/**
	 * Converts anime season from a dto object to a model.
	 * @param dto Anime season dto.
	 */
	export function fromDto(dto: AnimeSeasonDto): AnimeSeason {
		const statusMap = EnumUtils.createEnumMap(AnimeSeasonDto, AnimeSeason);
		return statusMap[dto];
	}

	/**
	 * 1.
	 * @param model 1.
	 */
	export function toDto(model: AnimeSeason): AnimeSeasonDto {
		const statusMap = EnumUtils.createEnumMap(AnimeSeason, AnimeSeasonDto);
		return statusMap[model];
	}
}
