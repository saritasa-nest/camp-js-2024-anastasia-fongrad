import { DateTimeIntervalDto } from './date-time-interval.dto';
import { AnimeStatusDto } from './enums/anime-status-dto.enum';
import { AnimeTypeDto } from './enums/anime-type-dto.enum';

/** Anime DTO. */
export type AnimeDto = {

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

	/** Anime airing dates. */
	readonly aired: DateTimeIntervalDto;

	/** Anime type. */
	readonly type: AnimeTypeDto;

	/** Anime airing status. */
	readonly status: AnimeStatusDto;

	/** Total anime score. */
	readonly score: number | null;

	/** User anime score. */
	readonly user_score: number | null;

	/** A list of released studios. */
	readonly studios: readonly number[];

	/** A list of anime genres. */
	readonly genres: readonly number[];
};
