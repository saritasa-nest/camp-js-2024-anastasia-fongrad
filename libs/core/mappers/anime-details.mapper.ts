import { AnimeDetailsDto } from '../dtos/anime-details.dto';
import { AnimeDetails } from '../models/anime-details.model';

import { AnimeRatingMapper } from './anime-rating.mapper';
import { AnimeSeasonMapper } from './anime-season.mapper';
import { AnimeSourceMapper } from './anime-source.mapper';
import { AnimeStatusMapper } from './anime-status.mapper';
import { AnimeTypeMapper } from './anime-type.mapper';
import { DateTimeIntervalMapper } from './date-time-interval.mapper';

export namespace AnimeDetailsMapper {

	/**
	 * Maps DTO to model.
	 * @param dto Anime details DTO.
	 */
	export function fromDto(dto: AnimeDetailsDto): AnimeDetails {
		return {
			id: dto.id,
			created: dto.created,
			modified: dto.modified,
			imageUrl: dto.image,
			trailerYoutubeIdUrl: dto.trailer_youtube_id,
			titleEnglish: dto.title_eng,
			titleJapanese: dto.title_jpn,
			criticScore: dto.score,
			userScore: dto.user_score,
			type: AnimeTypeMapper.fromDto(dto.type),
			status: AnimeStatusMapper.fromDto(dto.status),
			source: AnimeSourceMapper.fromDto(dto.source),
			airing: dto.airing ? 'Yes' : 'No',
			aired: DateTimeIntervalMapper.fromDto(dto.aired),
			rating: AnimeRatingMapper.fromDto(dto.rating),
			season: AnimeSeasonMapper.fromDto(dto.season),
			synopsis: dto.synopsis,
			background: dto.background,
			broadcastDay: dto.broadcast_day,
			broadcastTime: dto.broadcast_time,
			broadcastTimezone: dto.broadcast_timezone,
			studios: dto.studios,
			studiosData: dto.studios_data,
			genres: dto.genres,
			genresData: dto.genres_data,
		};
	}
}
