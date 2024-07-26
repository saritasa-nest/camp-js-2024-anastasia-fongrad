import { Immerable, OmitImmerable } from './immerable';
import { OrderingParameter } from './ordering.model';

/** Anime model. */
export class AnimeQueryParameters extends Immerable {

	/** Anime id. */
	public readonly offset: number;

	/** Anime preview image URL. */
	public readonly limitPerPage: number;

	/** Anime English title. */
	public readonly animeType: string | null;

	/** Anime Japanese title. */
	public readonly searchQuery: string | null;

	/** Anime type. */
	public readonly animeOrdering: OrderingParameter[];

	public constructor(data: AnimeConstructorData) {
		super();
		this.offset = data.offset;
		this.limitPerPage = data.limitPerPage;
		this.animeType = data.animeType;
		this.searchQuery = data.searchQuery;
		this.animeOrdering = data.animeOrdering;
	}
}

type AnimeConstructorData = OmitImmerable<AnimeQueryParameters>;
