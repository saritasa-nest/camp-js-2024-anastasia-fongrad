import { FormControl, NonNullableFormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimeType } from '@js-camp/core/models/enums/anime-type.enum';
import { AnimeStatus } from '@js-camp/core/models/enums/anime-status.enum';
import { AnimeRating } from '@js-camp/core/models/enums/anime-rating.enum';
import { DEFAULT_STATUS, DEFAULT_TYPE, DEFAULT_RATING } from '@js-camp/core/utils/anime-constants';

/** Login form type. */
export type AnimeDetailsForm = {

	/** Email form field. */
	readonly trailerUrl: FormControl<string>;

	/** Password form field. */
	readonly titleEnglish: FormControl<string>;

	/** 1. */
	readonly titleJapanese: FormControl<string>;

	/** 1. */
	readonly type: FormControl<AnimeType[]>;

	/** 1. */
	readonly status: FormControl<AnimeStatus[]>;

	/** 1. */
	readonly rating: FormControl<AnimeRating[]>;
};

/** 1. */
export type AnimeDetailsFormParams = {

	/** Form builder for form. */
	readonly formBuilder: NonNullableFormBuilder;

	/** 1. */
	readonly trailerUrlInitialValue: string;

	/** 1. */
	readonly titleEnglishInitialValue: string;

	/** 1. */
	readonly titleJapaneseInitialValue: string;

	/** Initial value for types form control. */
	readonly typesInitialValue: AnimeType[];

	/** Initial value for search form control. */
	readonly statusInitialValue: AnimeStatus[];

	/** 1. */
	readonly ratingInitialValue: AnimeRating[];
};

export namespace AnimeDetailsForm {

	/**
	 * Initializes a login form using FormBuilder.
	 * @param formBuilder Form builder object.
	 */
	export function initialize(formBuilder: NonNullableFormBuilder): FormGroup<AnimeDetailsForm> {
		return formBuilder.group({
			trailerUrl: formBuilder.control('', [Validators.required]),
			titleEnglish: formBuilder.control('', [Validators.required]),
			titleJapanese: formBuilder.control('', [Validators.required]),
			type: formBuilder.control(DEFAULT_TYPE, [Validators.required]),
			status: formBuilder.control(DEFAULT_STATUS, [Validators.required]),
			rating: formBuilder.control(DEFAULT_RATING, [Validators.required]),
		});
	}
}
