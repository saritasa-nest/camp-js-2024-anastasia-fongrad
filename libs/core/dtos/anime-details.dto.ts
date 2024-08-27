import { AnimeGenresDataDto } from './anime-genres-data.dto';
import { AnimeStudiosDataDto } from './anime-studios-data.dto';
import { DateTimeIntervalDto } from './date-time-interval.dto';
import { AnimeRatingDto } from './enums/anime-rating.dto';
import { AnimeSeasonDto } from './enums/anime-season.dto';
import { AnimeSourceDto } from './enums/anime-source.dto';
import { AnimeStatusDto } from './enums/anime-status-dto.enum';
import { AnimeTypeDto } from './enums/anime-type-dto.enum';

/** Anime details DTO. */
export type AnimeDetailsDto = {

	/** Id. */
	readonly id: number;

	/**
	 * Created.
	 * String in ISO date format.
	 * */
	readonly created: string;

	/**
	 * Modified.
	 * String in ISO date format.
	 * */
	readonly modified: string;

	/** Anime poster image URL. */
	readonly image: string;

	/** Trailer youtube id url. */
	readonly trailer_youtube_id: string;

	/** Anime title in English. */
	readonly title_eng: string;

	/** Anime title in Japanese. */
	readonly title_jpn: string;

	/** Critic score. */
	readonly score: number;

	/** User score. */
	readonly user_score: number;

	/** Type. */
	readonly type: AnimeTypeDto;

	/** Status. */
	readonly status: AnimeStatusDto;

	/** Source. */
	readonly source: AnimeSourceDto;

	/** Airing. */
	readonly airing: boolean;

	/** Aired. */
	readonly aired: DateTimeIntervalDto;

	/** Rating. */
	readonly rating: AnimeRatingDto;

	/** Season. */
	readonly season: AnimeSeasonDto;

	/** Synopsis. */
	readonly synopsis: string;

	/** Background. */
	readonly background: string;

	/** Broadcast day. */
	readonly broadcast_day: number;

	/** Broadcast time. */
	readonly broadcast_time: string;

	/** Broadcast timezone. */
	readonly broadcast_timezone: string;

	/** Studio ID's. */
	readonly studios: readonly number[];

	/** Studios data. */
	readonly studios_data: readonly AnimeStudiosDataDto[];

	/** Genre ID's. */
	readonly genres: readonly number[];

	/** Genres data. */
	readonly genres_data: readonly AnimeGenresDataDto[];
};
