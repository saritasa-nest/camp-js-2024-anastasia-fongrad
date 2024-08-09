import { AnimeRating } from '../models/enums/anime-rating.enum';
import { AnimeRatingDto } from '../dtos/enums/anime-rating-dto.enum';
import { EnumUtils } from '../utils/enum-utils';

export namespace AnimeRatingMapper {

	/**
	 * Converts anime sort parameters from a dto object to a model.
	 * @param dto Anime sort parameters dto.
	 */
	export function fromDto(dto: AnimeRatingDto): AnimeRating {
		const statusMap = EnumUtils.createEnumMap(AnimeRatingDto, AnimeRating);
		return statusMap[dto];
	}
}
