/** List-cursor pagination meta info. */
export type ListCursorPagination<T> = {

	/** Next page of items. */
	readonly nextCursor: string | null;

	/** Previous page of items. */
	readonly previousCursor: string | null;

	/** Array of items requested. */
	readonly results: readonly T[];
};
