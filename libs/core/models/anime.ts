import { Immerable, OmitImmerable } from './immerable';

/** Anime model. */
export class Anime extends Immerable {

	/** Anime id. */
	public readonly id: number;

	/** Anime preview image URL. */
	public readonly imageUrl: string;

	/** Anime English title. */
	public readonly titleEnglish: string;

	/** Anime Japanese title. */
	public readonly titleJapanese: string;

	/**
	 * Anime start airing date.
	 * @example '2024-07-22T02:40:54.873Z'.
	 */
	public readonly startDate: string | null;

	/** Anime type. */
	public readonly type: string;

	/** Anime airing status. */
	public readonly status: string;

	public constructor(data: AnimeConstructorData) {
		super();
		this.id = data.id;
		this.imageUrl = data.imageUrl;
		this.titleEnglish = data.titleEnglish;
		this.titleJapanese = data.titleJapanese;
		this.startDate = data.startDate;
		this.type = data.type;
		this.status = data.status;
	}
}

type AnimeConstructorData = OmitImmerable<Anime>;
