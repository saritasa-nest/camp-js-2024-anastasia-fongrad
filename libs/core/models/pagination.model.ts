import { Immerable, OmitImmerable } from './immerable';

/** Anime model. */
export class Pagination<T> extends Immerable {

	/** Total count of items. */
	public readonly totalCount: number;

	/** Next page of items. */
	public readonly nextPage: string;

	/** Previous page of items. */
	public readonly previousPage: string;

	/** Array of items requested. */
	public readonly results: readonly T[];

	public constructor(data: PaginationConstructorData<T>) {
		super();
		this.totalCount = data.totalCount;
		this.nextPage = data.nextPage;
		this.previousPage = data.previousPage;
		this.results = data.results;
	}
};

type PaginationConstructorData<T> = OmitImmerable<Pagination<T>>;
