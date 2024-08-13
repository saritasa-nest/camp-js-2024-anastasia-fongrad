import { Component, inject, Input, Output, EventEmitter, DestroyRef, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

import { DEFAULT_SEARCH_QUERY, DEFAULT_TYPE } from '@js-camp/core/utils/anime-constants';
import { AnimeType } from '@js-camp/core/models/enums/anime-type.enum';
import { AnimeQueryParameters } from '@js-camp/core/models/anime-query-parameters.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { AnimeFilterForm } from './anime-filter-form.model';

/** Anime filters form component. */
@Component({
	selector: 'camp-anime-filters',
	templateUrl: './anime-filter-form.component.html',
	styleUrls: ['./anime-filter-form.component.css'],
	standalone: true,
	imports: [
		MatFormFieldModule,
		MatSelectModule,
		MatInputModule,
		MatButtonModule,
		CommonModule,
		ReactiveFormsModule,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeFilterFormComponent implements OnInit {

	/** Initial value for a search query. */
	@Input()
	public searchQuery?: string;

	/** Initial value for anime types control. */
	@Input()
	public animeTypes?: AnimeType[];

	/** Event emitter for a sort table event. */
	@Output()
	public readonly filtersChange = new EventEmitter<Partial<AnimeQueryParameters>>();

	/** Reactive anime filter form. */
	protected readonly animeFiltersForm: FormGroup<AnimeFilterForm>;

	/** An array of available anime types to choose from. */
	protected readonly selectTypes = Object.values(AnimeType);

	private readonly destroyRef = inject(DestroyRef);

	private readonly formBuilder = inject(NonNullableFormBuilder);

	public constructor() {
		this.animeFiltersForm = this.initializeFiltersForm();
	}

	/** Patches form values and subscribes on fields changes. */
	public ngOnInit(): void {
		if (this.animeFiltersForm) {
			this.animeFiltersForm.patchValue({
				searchQuery: this.searchQuery ?? DEFAULT_SEARCH_QUERY,
				animeTypes: this.animeTypes ?? DEFAULT_TYPE,
			});
		}
		this.subscribeToFormChange();
	}

	private initializeFiltersForm(): FormGroup<AnimeFilterForm> {
		return AnimeFilterForm.initialize({
			formBuilder: this.formBuilder,
			searchInitialValue: DEFAULT_SEARCH_QUERY,
			typesInitialValue: DEFAULT_TYPE,
		});
	}

	private subscribeToFormChange(): void {
		this.animeFiltersForm.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe(formValues => {
				this.filtersChange.emit(formValues);
			});
	}
}
