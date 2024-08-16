import { AnimeRating } from '../models/enums/anime-rating.enum';
import { AnimeRatingDto } from '../dtos/enums/anime-rating-dto.enum';
import { EnumUtils } from '../utils/enum-utils';

export namespace AnimeRatingMapper {

	/**
	 * Converts anime rating from a dto object to a model.
	 * @param dto Anime rating dto.
	 */
	export function fromDto(dto: AnimeRatingDto): AnimeRating {
		const statusMap = EnumUtils.createEnumMap(AnimeRatingDto, AnimeRating);
		return statusMap[dto];
	}

	/**
	 * 1.
	 * @param model 1.
	 */
	export function toDto(model: AnimeRating): AnimeRatingDto {
		const statusMap = EnumUtils.createEnumMap(AnimeRating, AnimeRatingDto);
		return statusMap[model];
	}
}
