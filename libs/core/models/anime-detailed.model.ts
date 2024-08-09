import { AnimeStatus } from './enums/anime-status.enum';
import { AnimeType } from './enums/anime-type.enum';
import { Immerable, OmitImmerable } from './immerable.model';
import { AnimeGenre } from './anime-genre.model';
import { AnimeStudio } from './anime-studio.model';
import { DateTimeInterval } from './date-time-interval.model';
import { AnimeRating } from './enums/anime-rating.enum';
import { AnimeSource } from './enums/anime-source.enum';
import { AnimeSeason } from './enums/anime-season.enum';

/** Anime model. */
export class AnimeDetailed extends Immerable {

	/** Anime id. */
	public readonly id: number;

	/** Anime preview image URL. */
	public readonly imageUrl: string;

	/** 1. */
	public readonly trailerUrl: string;

	/** Anime English title. */
	public readonly titleEnglish: string;

	/** Anime Japanese title. */
	public readonly titleJapanese: string;

	/** Anime type. */
	public readonly type: AnimeType;

	/** Anime airing status. */
	public readonly status: AnimeStatus;

	/** 1. */
	public readonly rating: AnimeRating;

	/** 1. */
	public readonly source: AnimeSource;

	/** 1. */
	public readonly season: AnimeSeason;

	/** 1. */
	public readonly synopsis: string;

	/** 1. */
	public readonly isAiring: boolean;

	/** 1. */
	public readonly airingDates: DateTimeInterval;

	/** 1. */
	public readonly studios: readonly AnimeStudio[];

	/** 1. */
	public readonly genres: readonly AnimeGenre[];

	public constructor(data: AnimeDetailedConstructorData) {
		super();
		this.id = data.id;
		this.imageUrl = data.imageUrl;
		this.trailerUrl = data.trailerUrl;
		this.titleEnglish = data.titleEnglish;
		this.titleJapanese = data.titleJapanese;
		this.type = data.type;
		this.status = data.status;
		this.rating = data.rating;
		this.source = data.source;
		this.season = data.season;
		this.synopsis = data.synopsis;
		this.isAiring = data.isAiring;
		this.airingDates = data.airingDates;
		this.studios = data.studios;
		this.genres = data.genres;
	}
}

type AnimeDetailedConstructorData = OmitImmerable<AnimeDetailed>;
