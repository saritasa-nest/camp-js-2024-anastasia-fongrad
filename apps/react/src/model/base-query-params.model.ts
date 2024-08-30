/** Base query params. */
export namespace BaseQueryParams {

	/** Next cursor. */
	export type NextCursor = Readonly<{

		/** Next cursor. */
		nextCursor: string | null;
	}>;

	/** Search. */
	export type Search = Readonly<{

		/** Search. */
		search: string | null;
	}>;

	/** Base query params combined. */
	export type Combined = NextCursor & Search;
}
