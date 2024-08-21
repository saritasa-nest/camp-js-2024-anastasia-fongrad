import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { provideNativeDateAdapter } from '@angular/material/core';
import { AnimeType } from '@js-camp/core/models/enums/anime-type.enum';
import { AnimeStatus } from '@js-camp/core/models/enums/anime-status.enum';
import { AnimeRating } from '@js-camp/core/models/enums/anime-rating.enum';
import { AnimeSeason } from '@js-camp/core/models/enums/anime-season.enum';
import { AnimeSource } from '@js-camp/core/models/enums/anime-source.enum';
import { DEFAULT_TYPE, DEFAULT_RATING, DEFAULT_SEASON, DEFAULT_STATUS, DEFAULT_SOURCE } from '@js-camp/core/utils/anime-constants';

import { AnimeDetailsForm, AnimeDetailsFormParams } from './anime-form.model';

/** 1. */
@Component({
	selector: 'camp-anime-form',
	templateUrl: './anime-form.component.html',
	styleUrls: ['./anime-form.component.css'],
	standalone: true,
	providers: [provideNativeDateAdapter()],
	imports: [
		MatFormFieldModule,
		MatSelectModule,
		MatInputModule,
		MatButtonModule,
		MatDatepickerModule,
		MatButtonToggleModule,
		CommonModule,
		ReactiveFormsModule,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeDetailsFormComponent {

	/** Reactive anime filter form. */
	protected readonly animeDetailsForm: FormGroup<AnimeDetailsForm>;

	/** An array of available anime types to choose from. */
	protected readonly selectTypes = Object.values(AnimeType);

	/** 1. */
	protected readonly selectStatuses = Object.values(AnimeStatus);

	/** 1. */
	protected readonly selectRatings = Object.values(AnimeRating);

	/** 1. */
	protected readonly selectSeasons = Object.values(AnimeSeason);

	/** 1. */
	protected readonly selectSources = Object.values(AnimeSource);

	private readonly formBuilder = inject(NonNullableFormBuilder);

	public constructor() {
		this.animeDetailsForm = this.initializeAnimeDetailsForm();
	}

	private initializeAnimeDetailsForm(): FormGroup<AnimeDetailsForm> {
		const formParams: AnimeDetailsFormParams = {
			formBuilder: this.formBuilder,
			trailerUrlInitialValue: '',
			titleEnglishInitialValue: '',
			titleJapaneseInitialValue: '',
			typesInitialValue: DEFAULT_TYPE,
			statusInitialValue: DEFAULT_STATUS,
			ratingInitialValue: DEFAULT_RATING,
			sourceInitialValue: DEFAULT_SOURCE,
			seasonInitialValue: DEFAULT_SEASON,
			synopsisInitialValue: '',
			airingStatusInitialValue: false,
			airingStartInitialValue: '',
			airingEndInitialValue: '',
		};
		return AnimeDetailsForm.initialize(formParams);
	}
}
