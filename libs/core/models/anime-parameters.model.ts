import { AnimeType } from './enums/model-type.enum';
import { Immerable, OmitImmerable } from './immerable';
import { SortParameter } from './sort.model';

/** Anime query parameters model. */
export class AnimeQueryParameters extends Immerable {

	/** Offset of the first anime. */
	public offset: number;

	/** Max number of items per page. */
	public limitPerPage: number;

	/** Anime types to filter by. */
	public animeType: AnimeType[];

	/** A query to search anime by a title. */
	public searchQuery: string;

	/** Ordering parameters object to sort anime by. */
	public animeOrdering: SortParameter[];

	public constructor(data: Partial<AnimeConstructorData>) {
		super();
		this.offset = data.offset ?? 0;
		this.limitPerPage = data.limitPerPage ?? 5;
		this.animeType = data.animeType ?? [];
		this.searchQuery = data.searchQuery ?? '';
		this.animeOrdering = data.animeOrdering ?? [];
	}
}

type AnimeConstructorData = OmitImmerable<AnimeQueryParameters>;
