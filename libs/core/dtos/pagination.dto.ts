/** Pagination meta info. */
export type PaginationDto<T> = {

	/** Total count of items. */
	readonly count: number;

	/** Next page of items. */
	readonly next: string | null;

	/** Previous page of items. */
	readonly previous: string | null;

	/** Array of items requested. */
	readonly results: readonly T[];
};
