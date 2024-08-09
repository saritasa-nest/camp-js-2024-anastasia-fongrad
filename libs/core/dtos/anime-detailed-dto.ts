import { DateTimeIntervalDto } from './date-time-interval.dto';
import { AnimeStatusDto } from './enums/anime-status-dto.enum';
import { AnimeTypeDto } from './enums/anime-type-dto.enum';
import { AnimeGenreDto } from './anime-genre.dto';
import { AnimeStudioDto } from './anime-studio.dto';
import { AnimeRatingDto } from './enums/anime-rating-dto.enum';

/** Anime DTO. */
export type AnimeDetailedDto = {

	/** Id of the current anime. */
	readonly id: number;

	/**
	 * Anime creation date-time.
	 * @example '2024-07-16T06:21:11.171641Z'
	 */
	readonly created: string;

	/**
	 * Anime last modification date-time.
	 * @example '2024-07-16T06:21:11.171641Z'
	 */
	readonly modified: string;

	/** English title. */
	readonly title_eng: string;

	/** Japanese title. */
	readonly title_jpn: string;

	/** Anime preview. */
	readonly image: string;

	/** 1. */
	readonly trailer_youtube_id: string;

	/** 1. */
	readonly airing: boolean;

	/** Anime airing dates. */
	readonly aired: DateTimeIntervalDto;

	/** Anime type. */
	readonly type: AnimeTypeDto;

	/** Anime airing status. */
	readonly status: AnimeStatusDto;

	/** 1. */
	readonly source: string;

	/** Total anime score. */
	readonly score: number | null;

	/** User anime score. */
	readonly user_score: number | null;

	/** 1. */
	readonly rating: AnimeRatingDto;

	/** 1. */
	readonly season: string;

	/** 1. */
	readonly synopsis: string;

	/** 1. */
	readonly background: string;

	/** 1. */
	readonly broadcast_day: number;

	/** 1. */
	readonly broadcast_time: string;

	/** 1. */
	readonly broadcast_timezone: string;

	/** A list of released studios. */
	readonly studios: readonly number[];

	/** 1. */
	readonly studios_data: readonly AnimeStudioDto[];

	/** A list of anime genres. */
	readonly genres: readonly number[];

	/** 1. */
	readonly genres_data: readonly AnimeGenreDto[];
};
