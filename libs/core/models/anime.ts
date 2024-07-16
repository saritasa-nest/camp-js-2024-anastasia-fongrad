import { Immerable, OmitImmerable } from './immerable';

/** Genre. */
export class Anime extends Immerable {

	/** Id. */
	public readonly id: number;

	/** Id. */
	public readonly image: string;

	/** Id. */
	public readonly titleEng: string;

	/** Id. */
	public readonly titleJpn: string;

	/** Id. */
	public readonly startDate: string;

	/** Id. */
	public readonly type: string;

	/** Id. */
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
