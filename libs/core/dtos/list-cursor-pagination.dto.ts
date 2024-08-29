/** List-cursor pagination meta info. */
export type ListCursorPaginationDto<T> = {

	/** Next page of items. */
	readonly next: string | null;

	/** Previous page of items. */
	readonly previous: string | null;

	/** Array of items requested. */
	readonly results: readonly T[];
};
