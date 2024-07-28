import { Immerable, OmitImmerable } from './immerable';
import { OrderingParameter } from './ordering.model';

/** Anime model. */
export class AnimeQueryParameters extends Immerable {

	/** Anime id. */
	public offset: number;

	/** Anime preview image URL. */
	public limitPerPage: number;

	/** Anime English title. */
	public animeType: string;

	/** Anime Japanese title. */
	public searchQuery: string;

	/** Anime type. */
	public animeOrdering: OrderingParameter[];

	public constructor(data: Partial<AnimeConstructorData>) {
		super();
		this.offset = data.offset ?? 0;
		this.limitPerPage = data.limitPerPage ?? 5;
		this.animeType = data.animeType ?? '';
		this.searchQuery = data.searchQuery ?? '';
		this.animeOrdering = data.animeOrdering ?? [];
	}
}

type AnimeConstructorData = OmitImmerable<AnimeQueryParameters>;
