import { inject, ChangeDetectorRef, Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges, EventEmitter, Output, DestroyRef } from '@angular/core';
import { Observable, catchError, EMPTY } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, NonNullableFormBuilder, FormControl } from '@angular/forms';
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
import { AnimeStudio } from '@js-camp/core/models/anime-studio.model';
import { AnimeGenre } from '@js-camp/core/models/anime-genre.model';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { DEFAULT_TYPE, DEFAULT_RATING, DEFAULT_SEASON, DEFAULT_STATUS, DEFAULT_SOURCE } from '@js-camp/core/utils/anime-constants';
import { MatDialog } from '@angular/material/dialog';
import { AnimeService } from '@js-camp/angular/core/services/anime.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormValidationService } from '@js-camp/angular/core/services/form-validation.service';

import { StudiosDialogComponent } from '../studios-dialog/studios-dialog.component';
import { StudiosSelectComponent } from '../studios-select/studios-select.component';
import { GenresDialogComponent } from '../genres-dialog/genres-dialog.component';
import { GenresSelectComponent } from '../genres-select/genres-select.component';

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
		MatDividerModule,
		MatIconModule,
		CommonModule,
		ReactiveFormsModule,
		StudiosSelectComponent,
		GenresSelectComponent,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeDetailsFormComponent implements OnChanges {

	/** 1. */
	@Input()
	public animeDetails?: AnimeDetails;

	/** 1. */
	@Input()
	public animeStudios$?: Observable<AnimeStudio[]>;

	/** 1. */
	@Input()
	public animeGenres$?: Observable<AnimeGenre[]>;

	@Output()
	public addGenre = new EventEmitter<string>();

	@Output()
	public formSuccess = new EventEmitter<string>();

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

	private readonly dialog = inject(MatDialog);

	private readonly animeService = inject(AnimeService);

	private readonly validationService = inject(FormValidationService);

	private readonly changeDetectorRef = inject(ChangeDetectorRef);

	private readonly destroyRef = inject(DestroyRef);

	/** 1. */
	protected readonly selectedGenres: AnimeGenre[] = [];

	/** 1. */
	protected readonly selectedStudios: AnimeStudio[] = [];

	public constructor() {
		this.animeDetailsForm = this.initializeAnimeDetailsForm();
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
				airingStatus: this.animeDetails.airingStatus,
				airingStartDate: startDate ?? '',
				airingEndDate: endDate ?? '',
				genres: this.animeDetails.genres ?? [],
				studios: this.animeDetails.studios ?? [],
			});
		}
		if (this.animeDetails?.studios) {
			this.selectedStudios.push(...this.animeDetails.studios);
		}
		if (this.animeDetails?.genres) {
			this.selectedGenres.push(...this.animeDetails.genres);
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
			genres: [],
			studios: [],
		};
		return AnimeDetailsForm.initialize(formParams);
	}

	/** 1. */
	protected createNewGenre(): void {
		const dialogRef = this.dialog.open(GenresDialogComponent, {
			width: '500px',
			data: { stringValue: '' },
		});
		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.addGenre.emit(result);
			}
		});
	}

	/** 1. */
	protected createNewStudio(): void {
		const dialogRef = this.dialog.open(StudiosDialogComponent, {
			width: '500px',
			data: { stringValue: '' },
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log(result);
		});
	}

	/** 1. */
	public onSubmit(): void {
		if (this.animeDetailsForm.invalid) {
			return;
		}
		const formData = this.animeDetailsForm.getRawValue();
		// formData.studios.copyWithin(this.selectedStudios,)
		console.log(formData);
		this.animeService.add(formData).pipe(
			catchError((error: unknown) => {
				const errors = this.validationService.parseError(error);
				this.validationService.setFormErrors(this.animeDetailsForm, errors);
				this.changeDetectorRef.markForCheck();
				return EMPTY;
			}),
			takeUntilDestroyed(this.destroyRef),
		).subscribe(() => this.formSuccess.emit('Anime have been created'));;
	}
}
