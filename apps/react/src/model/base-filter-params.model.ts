export namespace BaseFilterParams {
	export type NextCursor = Readonly<{
		cursor: string | null;
	}>;
	/** Search. */
	export type Search = Readonly<{
		/** Search. */
		search: string | null;
	}>;
	export type Combined = NextCursor & Search;
}
