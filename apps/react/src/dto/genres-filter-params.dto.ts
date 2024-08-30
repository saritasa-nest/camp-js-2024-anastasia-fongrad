import { BaseFilterParamsDto } from './base-filter-params.dto';

export namespace GenresFilterParamsDto {

	/** Ordering type. */
	export type Ordering = Readonly<{

		/** Ordering. */
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
		type__in: string | null;
	}>;

	/** Combined. */
	export type Combined = BaseFilterParamsDto.Combined & Ordering & Type;
}
