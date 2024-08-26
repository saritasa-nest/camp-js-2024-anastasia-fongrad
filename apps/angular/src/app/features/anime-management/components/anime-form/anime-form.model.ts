import { FormControl, NonNullableFormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimeType } from '@js-camp/core/models/enums/anime-type.enum';
import { AnimeStatus } from '@js-camp/core/models/enums/anime-status.enum';
import { AnimeRating } from '@js-camp/core/models/enums/anime-rating.enum';
import { AnimeSource } from '@js-camp/core/models/enums/anime-source.enum';
import { AnimeSeason } from '@js-camp/core/models/enums/anime-season.enum';

/** Login form type. */
export type AnimeDetailsForm = {

	/** Email form field. */
	readonly trailerUrl: FormControl<string>;

	/** Password form field. */
	readonly titleEnglish: FormControl<string>;

	/** 1. */
	readonly titleJapanese: FormControl<string>;

	/** 1. */
	readonly type: FormControl<AnimeType>;

	/** 1. */
	readonly status: FormControl<AnimeStatus>;

	/** 1. */
	readonly rating: FormControl<AnimeRating>;

	/** 1. */
	readonly source: FormControl<AnimeSource>;

	/** 1. */
	readonly season: FormControl<AnimeSeason>;

	/** 1. */
	readonly synopsis: FormControl<string>;

	/** 1. */
	readonly airingStatus: FormControl<boolean>;

	/** 1. */
	readonly airingStartDate: FormControl<string>;

	/** 1. */
	readonly airingEndDate: FormControl<string>;
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
	readonly typesInitialValue: AnimeType;

	/** Initial value for search form control. */
	readonly statusInitialValue: AnimeStatus;

	/** 1. */
	readonly ratingInitialValue: AnimeRating;

	/** 1. */
	readonly sourceInitialValue: AnimeSource;

	/** 1. */
	readonly seasonInitialValue: AnimeSeason;

	/** 1. */
	readonly synopsisInitialValue: string;

	/** 1. */
	readonly airingStatusInitialValue: boolean;

	/** 1. */
	readonly airingStartInitialValue: string;

	/** 1. */
	readonly airingEndInitialValue: string;
};

export namespace AnimeDetailsForm {

	/**
	 * Initializes a login form using FormBuilder.
	 * @param animeDetailsParams Form builder object.
	 */
	export function initialize(animeDetailsParams: AnimeDetailsFormParams): FormGroup<AnimeDetailsForm> {
		return animeDetailsParams.formBuilder.group({
			trailerUrl: animeDetailsParams.formBuilder.control(
				animeDetailsParams.trailerUrlInitialValue,
				[Validators.required],
			),
			titleEnglish: animeDetailsParams.formBuilder.control(
				animeDetailsParams.titleEnglishInitialValue,
				[Validators.required],
			),
			titleJapanese: animeDetailsParams.formBuilder.control(
				animeDetailsParams.titleJapaneseInitialValue,
				[Validators.required],
			),
			type: animeDetailsParams.formBuilder.control(
				animeDetailsParams.typesInitialValue,
				[Validators.required],
			),
			status: animeDetailsParams.formBuilder.control(
				animeDetailsParams.statusInitialValue,
				[Validators.required],
			),
			rating: animeDetailsParams.formBuilder.control(
				animeDetailsParams.ratingInitialValue,
				[Validators.required],
			),
			season: animeDetailsParams.formBuilder.control(
				animeDetailsParams.seasonInitialValue,
				[Validators.required],
			),
			source: animeDetailsParams.formBuilder.control(
				animeDetailsParams.sourceInitialValue,
				[Validators.required],
			),
			synopsis: animeDetailsParams.formBuilder.control(animeDetailsParams.synopsisInitialValue),
			airingStatus: animeDetailsParams.formBuilder.control(
				animeDetailsParams.airingStatusInitialValue,
				[Validators.required],
			),
			airingStartDate: animeDetailsParams.formBuilder.control(animeDetailsParams.airingStartInitialValue),
			airingEndDate: animeDetailsParams.formBuilder.control(animeDetailsParams.airingEndInitialValue),
		});
	}
}
