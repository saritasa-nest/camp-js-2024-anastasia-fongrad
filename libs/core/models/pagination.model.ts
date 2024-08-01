import { Immerable, OmitImmerable } from './immerable.model';

/** Pagination model. */
export class Pagination<T> extends Immerable {

	/** Total count of items. */
	public readonly totalCount: number;

	/** Next page of items. */
	public readonly nextPage: string | null;

	/** Previous page of items. */
	public readonly previousPage: string | null;

	/** Array of items requested. */
	public readonly results: readonly T[];

	public constructor(data: PaginationConstructorData<T>) {
		super();
		this.totalCount = data.totalCount;
		this.nextPage = data.nextPage;
		this.previousPage = data.previousPage;
		this.results = data.results;
	}
}

type PaginationConstructorData<T> = OmitImmerable<Pagination<T>>;
