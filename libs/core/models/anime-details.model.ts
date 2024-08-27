import { AnimeGenresData } from './anime-genres-data.model';
import { AnimeRating } from './enums/anime-rating.model';
import { AnimeSeason } from './enums/anime-season.model';
import { AnimeSource } from './enums/anime-source.model';
import { AnimeStudiosData } from './anime-studios-data.model';
import { DateTimeInterval } from './date-time-interval.model';
import { AnimeStatus } from './enums/anime-status.enum';
import { AnimeType } from './enums/anime-type.enum';

/** Anime details. */
export type AnimeDetails = {

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

	/** Anime poster image url. */
	readonly imageUrl: string;

	/** Trailer youtube id url. */
	readonly trailerYoutubeIdUrl: string;

	/** Anime title in English. */
	readonly titleEnglish: string;

	/** Anime title in Japanese. */
	readonly titleJapanese: string;

	/** Critic score. */
	readonly criticScore: number;

	/** User score. */
	readonly userScore: number;

	/** Type. */
	readonly type: AnimeType;

	/** Status. */
	readonly status: AnimeStatus;

	/** Source. */
	readonly source: AnimeSource;

	/** Airing. */
	readonly airing: string;

	/** Aired. */
	readonly aired: DateTimeInterval;

	/** Rating. */
	readonly rating: AnimeRating;

	/** Season. */
	readonly season: AnimeSeason;

	/** Synopsis. */
	readonly synopsis: string;

	/** Background. */
	readonly background: string;

	/** Broadcast day. */
	readonly broadcastDay: number;

	/** Broadcast time. */
	readonly broadcastTime: string;

	/** Broadcast timezone. */
	readonly broadcastTimezone: string;

	/** Studio ID's. */
	readonly studios: readonly number[];

	/** Studios data. */
	readonly studiosData: readonly AnimeStudiosData[];

	/** Genre ID's. */
	readonly genres: readonly number[];

	/** Genres data. */
	readonly genresData: readonly AnimeGenresData[];
};
