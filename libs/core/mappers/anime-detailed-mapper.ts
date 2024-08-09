import { AnimeDetailed } from '../models/anime-detailed.model';
import { AnimeDetailedDto } from '../dtos/anime-detailed-dto';

import { AnimeStatusMapper } from './anime-status.mapper';
import { AnimeTypeMapper } from './anime-type.mapper';
import { AnimeGenreMapper } from './anime-genre.mapper';
import { AnimeStudioMapper } from './anime-studio-mapper';
import { DateTimeIntervalMapper } from './date-time-interval.mapper';
import { AnimeRatingMapper } from './anime-rating-mapper';

export namespace AnimeDetailedMapper {

	/**
	 * Maps anime dto to model.
	 * @param dto Anime dto.
	 */
	export function fromDto(dto: AnimeDetailedDto): AnimeDetailed {
		return new AnimeDetailed({
			id: dto.id,
			imageUrl: dto.image,
			titleEnglish: dto.title_eng,
			titleJapanese: dto.title_jpn,
			type: AnimeTypeMapper.fromDto(dto.type),
			status: AnimeStatusMapper.fromDto(dto.status),
			rating: AnimeRatingMapper.fromDto(dto.rating),
			source: dto.source,
			season: dto.season,
			synopsis: dto.synopsis,
			isAiring: dto.airing,
			airingDates: DateTimeIntervalMapper.fromDto(dto.aired),
			studios: dto.studios_data.map(studio => AnimeStudioMapper.fromDto(studio)),
			genres: dto.genres_data.map(genre => AnimeGenreMapper.fromDto(genre)),
		});
	}
}
