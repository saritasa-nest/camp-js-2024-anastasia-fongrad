import { AnimeStatus } from './enums/anime-status.enum';
import { AnimeType } from './enums/anime-type.enum';
import { Immerable, OmitImmerable } from './immerable.model';
import { AnimeGenre } from './anime-genre.model';
import { AnimeStudio } from './anime-studio.model';
import { DateTimeInterval } from './date-time-interval.model';
import { AnimeRating } from './enums/anime-rating.enum';
import { AnimeSource } from './enums/anime-source.enum';
import { AnimeSeason } from './enums/anime-season.enum';

/** Anime details model. */
export class AnimeDetails extends Immerable {

	/** Anime id. */
	public readonly id: number;

	/** Anime preview image URL. */
	public readonly imageUrl: string;

	/** YouTube trailer url. */
	public readonly trailerUrl: string;

	/** Anime English title. */
	public readonly titleEnglish: string;

	/** Anime Japanese title. */
	public readonly titleJapanese: string;

	/** Anime type. */
	public readonly type: AnimeType;

	/** Anime status. */
	public readonly status: AnimeStatus;

	/** Anime rating. */
	public readonly rating: AnimeRating;

	/** Anime source. */
	public readonly source: AnimeSource;

	/** Anime season. */
	public readonly season: AnimeSeason;

	/** Anime synopsis. */
	public readonly synopsis: string;

	/** Anime airing status. */
	public readonly airingStatus: 'on air' | 'off air';

	/** Anime airing dates. */
	public readonly airingDates: DateTimeInterval;

	/** A list of anime studios. */
	public readonly studios: readonly AnimeStudio[];

	/** A list of anime genres. */
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
		this.airingStatus = data.airingStatus;
		this.airingDates = data.airingDates;
		this.studios = data.studios;
		this.genres = data.genres;
	}
}

type AnimeDetailedConstructorData = OmitImmerable<AnimeDetails>;
