import { inject, Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges, model, signal, computed, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveAnnouncer } from '@angular/cdk/a11y';
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
import { AnimeDetails } from '@js-camp/core/models/anime-details.model';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule, MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
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
		MatAutocompleteModule,
		MatChipsModule,
		MatDividerModule,
		MatIconModule,
		CommonModule,
		ReactiveFormsModule,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeDetailsFormComponent implements OnChanges {

	/** 1. */
	@Input()
	public animeDetails?: AnimeDetails;

	/** Reactive anime filter form. */
	protected animeDetailsForm: FormGroup<AnimeDetailsForm>;

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

	/** 1. */
	protected separatorKeysCodes: number[] = [ENTER, COMMA];

	private readonly formBuilder = inject(NonNullableFormBuilder);

	private readonly announcer = inject(LiveAnnouncer);

	/** 1. */
	protected readonly fruits = signal(['Lemon']);

	/** 1. */
	protected readonly allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

	/** 1. */
	protected readonly currentFruit = model('');

	/** 1. */
	protected readonly filteredFruits: Signal<string[]>;

	public constructor() {
		this.animeDetailsForm = this.initializeAnimeDetailsForm();
		this.filteredFruits = computed(() => {
			const currentFruit = this.currentFruit().toLowerCase();
			return currentFruit ? this.allFruits.filter(fruit => fruit.toLowerCase().includes(currentFruit)) : this.allFruits.slice();
		});
	}

	/**
	 * 1.
	 * @param changes 1.
	 */
	public ngOnChanges(changes: SimpleChanges): void {
		if (changes['animeDetails'] && this.animeDetails) {
			const startDate = this.animeDetails.airingDates.start?.toISOString().split('T')[0];
			const endDate = this.animeDetails.airingDates.end?.toISOString().split('T')[0];
			this.animeDetailsForm.patchValue({
				trailerUrl: this.animeDetails.trailerUrl,
				titleEnglish: this.animeDetails.titleEnglish,
				titleJapanese: this.animeDetails.titleJapanese,
				type: this.animeDetails.type,
				status: this.animeDetails.status,
				rating: this.animeDetails.rating,
				source: this.animeDetails.source,
				season: this.animeDetails.season,
				synopsis: this.animeDetails.synopsis,
				airingStatus: this.animeDetails.airingStatus === 'on air',
				airingStartDate: startDate ?? '',
				airingEndDate: endDate ?? '',
			});
		}
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

	/**
	 * 1.
	 * @param event 1.
	 */
	protected add(event: MatChipInputEvent): void {
		const value = (event.value || '').trim();
		if (value) {
			this.fruits.update(fruits => [...fruits, value]);
		}
		this.currentFruit.set('');
	}

	/**
	 * 1.
	 * @param fruit 1.
	 */
	protected remove(fruit: string): void {
		this.fruits.update(fruits => {
			const index = fruits.indexOf(fruit);
			if (index < 0) {
				return fruits;
			}
			fruits.splice(index, 1);
			this.announcer.announce(`Removed ${fruit}`);
			return [...fruits];
		});
	}

	/**
	 * 1.
	 * @param event 1.
	 */
	protected selected(event: MatAutocompleteSelectedEvent): void {
		this.fruits.update(fruits => [...fruits, event.option.viewValue]);
		this.currentFruit.set('');
		event.option.deselect();
	}
}
