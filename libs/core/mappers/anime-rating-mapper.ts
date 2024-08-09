import { AnimeRating } from '../models/enums/anime-rating.enum';
import { AnimeRatingDto } from '../dtos/enums/anime-rating-dto.enum';

export namespace AnimeRatingMapper {

	/**
	 * Converts anime sort parameters from a dto object to a model.
	 * @param dto Anime sort parameters dto.
	 */
	export function fromDto(dto: AnimeRatingDto): AnimeRating {
		const statusMap: Record<AnimeRatingDto, AnimeRating> = {
			[AnimeRatingDto.AllAges]: AnimeRating.AllAges,
			[AnimeRatingDto.Children]: AnimeRating.Children,
			[AnimeRatingDto.Teens]: AnimeRating.Teens,
			[AnimeRatingDto.Violence]: AnimeRating.Violence,
			[AnimeRatingDto.MildNudity]: AnimeRating.MildNudity,
			[AnimeRatingDto.Hentai]: AnimeRating.Hentai,
			[AnimeRatingDto.Unknown]: AnimeRating.Unknown,
		};
		return statusMap[dto];
	}
}
