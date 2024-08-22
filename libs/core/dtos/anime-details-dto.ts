import { DateTimeIntervalDto } from './date-time-interval.dto';
import { AnimeStatusDto } from './enums/anime-status-dto.enum';
import { AnimeTypeDto } from './enums/anime-type-dto.enum';
import { AnimeGenreDto } from './anime-genre.dto';
import { AnimeStudioDto } from './anime-studio.dto';
import { AnimeRatingDto } from './enums/anime-rating-dto.enum';
import { AnimeSourceDto } from './enums/anime-source-dto.enum';
import { AnimeSeasonDto } from './enums/anime-season-dto.enum';

/** Anime details DTO. */
export type AnimeDetailsDto = {

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

	/** YouTube trailer id. */
	readonly trailer_youtube_id: string;

	/** Anime airing status. */
	readonly airing: boolean;

	/** Anime airing dates. */
	readonly aired: DateTimeIntervalDto;

	/** Anime type. */
	readonly type: AnimeTypeDto;

	/** Anime status. */
	readonly status: AnimeStatusDto;

	/** Anime source. */
	readonly source: AnimeSourceDto;

	/** Total anime score. */
	readonly score: number | null;

	/** User anime score. */
	readonly user_score: number | null;

	/** Anime rating. */
	readonly rating: AnimeRatingDto;

	/** Anime season. */
	readonly season: AnimeSeasonDto;

	/** Anime synopsis. */
	readonly synopsis: string;

	/** Anime background. */
	readonly background: string;

	/** Anime broadcast day. */
	readonly broadcast_day: number;

	/** Anime broadcast time. */
	readonly broadcast_time: string;

	/** Anime broadcast timezone. */
	readonly broadcast_timezone: string;

	/** A list of anime studio ids. */
	readonly studios: readonly number[];

	/** A list of anime studio objects. */
	readonly studios_data: readonly AnimeStudioDto[];

	/** A list of anime genre ids. */
	readonly genres: readonly number[];

	/** A list of anime genre objects. */
	readonly genres_data: readonly AnimeGenreDto[];
};
