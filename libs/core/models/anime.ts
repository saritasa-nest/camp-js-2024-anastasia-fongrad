import { Immerable, OmitImmerable } from './immerable';

/** Anime model. */
export class Anime extends Immerable {

	/** Anime id. */
	public readonly id: number;

	/** Anime preview image. */
	public readonly image: string;

	/** Anime English title. */
	public readonly titleEng: string;

	/** Anime Japanese title. */
	public readonly titleJpn: string;

	/** Anime start airing date. */
	public readonly startDate: string | null;

	/** Anime type. */
	public readonly type: string;

	/** Anime airing status. */
	public readonly status: string;

	public constructor(data: AnimeConstructorData) {
		super();
		this.id = data.id;
		this.image = data.image;
		this.titleEng = data.titleEng;
		this.titleJpn = data.titleJpn;
		this.startDate = data.startDate;
		this.type = data.type;
		this.status = data.status;
	}
}

type AnimeConstructorData = OmitImmerable<Anime>;
