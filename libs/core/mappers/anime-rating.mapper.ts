import { AnimeRatingDto } from '../dtos/enums/anime-rating.dto';
import { AnimeRating } from '../models/enums/anime-rating.model';

const FROM_DTO: Readonly<Record<AnimeRatingDto, AnimeRating>> = {
	[AnimeRatingDto.G]: AnimeRating.G,
	[AnimeRatingDto.PG]: AnimeRating.Pg,
	[AnimeRatingDto.PG_13]: AnimeRating.Pg13,
	[AnimeRatingDto.R_17]: AnimeRating.R17,
	[AnimeRatingDto.R_PLUS]: AnimeRating.RPlus,
	[AnimeRatingDto.R_X]: AnimeRating.Rx,
	[AnimeRatingDto.UNKNOWN]: AnimeRating.Unknown,
};

export namespace AnimeRatingMapper {
	/**
	 * Maps DTO to model.
	 * @param dto Anime rating DTO.
	 */
	export function fromDto(dto: AnimeRatingDto): AnimeRating {
		return FROM_DTO[dto];
	}
}
