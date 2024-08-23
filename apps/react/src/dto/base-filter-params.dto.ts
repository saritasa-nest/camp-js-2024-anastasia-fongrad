/** Base filter params dto. */
export namespace BaseFilterParamsDto {

	/** Cursor for next data. */
	export type NextCursor = Readonly<{

		/** Cursor. */
		cursor: string | null;
	}>;

	/** Search. */
	export type Search = Readonly<{

		/** Search. */
		search: string | null;
	}>;

	/** Base filter type combined. */
	export type Combined = NextCursor & Search;
}
