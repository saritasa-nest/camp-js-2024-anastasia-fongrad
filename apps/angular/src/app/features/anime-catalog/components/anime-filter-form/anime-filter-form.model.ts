import { FormControl, NonNullableFormBuilder, FormGroup } from '@angular/forms';
import { AnimeType } from '@js-camp/core/models/enums/anime-type.enum';

/** Type for an anime filters form. */
export type AnimeFilterForm = {

	/** Form control to select the type of anime. */
	readonly animeTypes: FormControl<AnimeType[]>;

	/** Form control to search anime by its title. */
	readonly searchQuery: FormControl<string>;
};

/** Type of parameters of the form initialization function. */
export type AnimeFilterFormParams = {

	/** Form builder for form. */
	readonly formBuilder: NonNullableFormBuilder;

	/** Initial value for types form control. */
	readonly typesInitialValue: AnimeType[];

	/** Initial value for search form control. */
	readonly searchInitialValue: string;
};

export namespace AnimeFilterForm {

	/**
	 * Function for initializing anime form filter.
	 * @param typesInitialValue - Initial value for types form control.
	 * @param searchInitialValue - Initial value for search form control.
	 * @param formBuilder - From builder for form.
	 * @returns Anime form.
	 */
	export function initialize({ formBuilder, searchInitialValue, typesInitialValue }: AnimeFilterFormParams): FormGroup<AnimeFilterForm> {
		return formBuilder.group({
			animeTypes: formBuilder.control(typesInitialValue),
			searchQuery: formBuilder.control(searchInitialValue),
		});
	}
}
