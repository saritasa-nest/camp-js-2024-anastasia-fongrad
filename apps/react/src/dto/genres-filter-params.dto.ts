import { BaseFilterParamsDto } from './base-filter-params.dto';

export namespace GenresFilterParamsDto {
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
	export type Combined = BaseFilterParamsDto.Combined & Ordering & Type;
}
