import { FormControl, NonNullableFormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimeType } from '@js-camp/core/models/enums/anime-type.enum';
import { AnimeStatus } from '@js-camp/core/models/enums/anime-status.enum';
import { AnimeRating } from '@js-camp/core/models/enums/anime-rating.enum';
import { AnimeSource } from '@js-camp/core/models/enums/anime-source.enum';
import { AnimeSeason } from '@js-camp/core/models/enums/anime-season.enum';
import { AnimeStudio } from '@js-camp/core/models/anime-studio.model';
import { AnimeGenre } from '@js-camp/core/models/anime-genre.model';

/** Anime details form type. */
export type AnimeDetailsForm = {

	/** Anime image form control. */
	readonly imageUrl: FormControl<string>;

	/** Anime trailer form control. */
	readonly trailerUrl: FormControl<string>;

	/** English title form control. */
	readonly titleEnglish: FormControl<string>;

	/** Japanese title form control. */
	readonly titleJapanese: FormControl<string>;

	/** Anime type form control. */
	readonly type: FormControl<AnimeType>;

	/** Anime status form control. */
	readonly status: FormControl<AnimeStatus>;

	/** Anime rating form control. */
	readonly rating: FormControl<AnimeRating>;

	/** Anime source form control. */
	readonly source: FormControl<AnimeSource>;

	/** Anime season form control. */
	readonly season: FormControl<AnimeSeason>;

	/** Anime synopsis form control. */
	readonly synopsis: FormControl<string>;

	/** Is anime airing. */
	readonly airingStatus: FormControl<boolean>;

	/** Date and time of the start of the airing. */
	readonly airingStartDate: FormControl<string>;

	/** Date and time of the end of the airing. */
	readonly airingEndDate: FormControl<string>;

	/** Anime studios array. */
	readonly studios: FormControl<AnimeStudio[]>;

	/** Anime genres array. */
	readonly genres: FormControl<AnimeGenre[]>;
};

/** 1. */
export type AnimeDetailsFormParams = {

	/** Form builder for form. */
	readonly formBuilder: NonNullableFormBuilder;

	/** 1. */
	readonly imageUrlInitialValue: string;

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

	/** 1. */
	readonly genres: AnimeGenre[];

	/** 1. */
	readonly studios: AnimeStudio[];
};

export namespace AnimeDetailsForm {

	/**
	 * Initializes an anime detail form using FormBuilder.
	 * @param animeDetailsParams Form builder object.
	 */
	export function initialize(animeDetailsParams: AnimeDetailsFormParams): FormGroup<AnimeDetailsForm> {
		return animeDetailsParams.formBuilder.group({
			imageUrl: animeDetailsParams.formBuilder.control(
				animeDetailsParams.imageUrlInitialValue,
			),
			trailerUrl: animeDetailsParams.formBuilder.control(
				animeDetailsParams.trailerUrlInitialValue,
			),
			titleEnglish: animeDetailsParams.formBuilder.control(
				animeDetailsParams.titleEnglishInitialValue,
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
			genres: animeDetailsParams.formBuilder.control(animeDetailsParams.genres),
			studios: animeDetailsParams.formBuilder.control(animeDetailsParams.studios),
		});
	}
}
