/** Base query params. */
export namespace BaseQueryParams {
	export type NextCursor = Readonly<{
		nextCursor: string | null;
	}>;
	/** Search. */
	export type Search = Readonly<{
		/** Search. */
		search: string | null;
	}>;
	export type Combined = NextCursor & Search;
}
