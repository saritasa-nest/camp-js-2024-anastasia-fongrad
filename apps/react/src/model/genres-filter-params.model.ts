import { BaseFilterParams } from "./base-filter-params.model";

export namespace GenresFilterParams {
	export type Ordering = Readonly<{
		ordering: string | null;
	}>;

	/** Filter type. */
	export enum FilterTypes {
		Genres = 'GENRES',
		ExplicitGenres = 'EXPLICIT_GENRES',
		Themes = 'THEMES',
		Demographics = 'DEMOGRAPHICS',
	}

	/** Type. */
	export type Type = Readonly<{
		/** Type. */
		type: string | null;
	}>;
	/** Combined. */
	export type Combined = BaseFilterParams.Search & Ordering & Type;
}
