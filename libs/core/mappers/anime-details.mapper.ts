import { AnimeDetails } from '../models/anime-details.model';
import { AnimeDetailsDto } from '../dtos/anime-details-dto';

import { AnimeStatusMapper } from './anime-status.mapper';
import { AnimeTypeMapper } from './anime-type.mapper';
import { AnimeGenreMapper } from './anime-genre.mapper';
import { AnimeStudioMapper } from './anime-studio-mapper';
import { DateTimeIntervalMapper } from './date-time-interval.mapper';
import { AnimeRatingMapper } from './anime-rating.mapper';
import { AnimeSourceMapper } from './anime-source-mapper';
import { AnimeSeasonMapper } from './anime-season.mapper';

export namespace AnimeDetailsMapper {

	/**
	 * Maps anime dto to model.
	 * @param dto Anime dto.
	 */
	export function fromDto(dto: AnimeDetailsDto): AnimeDetails {
		return new AnimeDetails({
			id: dto.id,
			imageUrl: dto.image,
			trailerUrl: dto.trailer_youtube_id ? `https://www.youtube.com/embed/${dto.trailer_youtube_id}` : '',
			titleEnglish: dto.title_eng,
			titleJapanese: dto.title_jpn,
			type: AnimeTypeMapper.fromDto(dto.type),
			status: AnimeStatusMapper.fromDto(dto.status),
			rating: AnimeRatingMapper.fromDto(dto.rating),
			source: AnimeSourceMapper.fromDto(dto.source),
			season: AnimeSeasonMapper.fromDto(dto.season),
			synopsis: dto.synopsis,
			airingStatus: dto.airing,
			airingDates: DateTimeIntervalMapper.fromDto(dto.aired),
			studios: dto.studios_data.map(studio => AnimeStudioMapper.fromDto(studio)),
			genres: dto.genres_data.map(genre => AnimeGenreMapper.fromDto(genre)),
		});
	}

	/**
	 * 1.
	 * @param model 1.
	 */
	export function toDto(model: Partial<AnimeDetails>): Partial<AnimeDetailsDto> {
		return {
			image: model.imageUrl,

			// Disable eslint for a dto field name.
			// eslint-disable-next-line @typescript-eslint/naming-convention
			trailer_youtube_id: model.trailerUrl,

			// Disable eslint for a dto field name.
			// eslint-disable-next-line @typescript-eslint/naming-convention
			title_eng: model.titleEnglish,

			// Disable eslint for a dto field name.
			// eslint-disable-next-line @typescript-eslint/naming-convention
			title_jpn: model.titleJapanese,
			type: model.type ? AnimeTypeMapper.toDto(model.type) : undefined,
			status: model.status ? AnimeStatusMapper.toDto(model.status) : undefined,
			rating: model.rating? AnimeRatingMapper.toDto(model.rating) : undefined,
			source: model.source ? AnimeSourceMapper.toDto(model.source) : undefined,
			season: model.season ? AnimeSeasonMapper.toDto(model.season) : undefined,
			synopsis: model.synopsis,
			airing: model.airingStatus,
			aired: model.airingDates ? DateTimeIntervalMapper.toDto(model.airingDates) : undefined,
			studios: model.studios ? model.studios.map(studio => studio.id) : [],
			genres: model.genres ? model.genres.map(genre => genre.id) : [],
		};
	}
}
