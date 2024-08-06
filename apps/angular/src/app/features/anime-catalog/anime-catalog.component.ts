import { Component, inject, OnInit, DestroyRef } from '@angular/core';
import { AnimeTableComponent } from '@js-camp/angular/app/features/anime-catalog/components/anime-table/anime-table.component';
import { HeaderComponent } from '@js-camp/angular/shared/components/header/header.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormGroup, ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Observable, switchMap } from 'rxjs';
import { Pagination } from '@js-camp/core/models/pagination.model';
import { Anime } from '@js-camp/core/models/anime.model';
import { CommonModule } from '@angular/common';
import { AnimeQueryParametersService } from '@js-camp/angular/core/services/anime-query-parameters.service';
import { AnimeQueryParameters } from '@js-camp/core/models/anime-query-parameters.model';
import { AnimeType } from '@js-camp/core/models/enums/anime-type.enum';
import { AnimeApiService } from '@js-camp/angular/core/services/anime-api.service';
import { DEFAULT_TYPE, DEFAULT_SEARCH_QUERY } from '@js-camp/core/utils/anime-constants';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { AnimeFilterForm } from './anime-filter-form.model';

/** A component that represents anime catalog page. */
@Component({
	selector: 'camp-anime-catalog',
	imports: [
		AnimeTableComponent,
		HeaderComponent,
		MatPaginatorModule,
		MatFormFieldModule,
		MatSelectModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		CommonModule,
		ReactiveFormsModule,
	],
	styleUrl: './anime-catalog.component.css',
	templateUrl: './anime-catalog.component.html',
	standalone: true,
})
export class AnimeCatalogComponent implements OnInit {

	/** An array of available anime types to choose from. */
	protected readonly selectTypes = Object.values(AnimeType);

	/** Anime pagination data to be displayed. */
	protected readonly paginatedAnime$: Observable<Pagination<Anime>>;

	/** Anime query parameters. */
	protected readonly animeParameters$: Observable<Partial<AnimeQueryParameters>>;

	/** Reactive anime filter form. */
	protected readonly animeFiltersForm: FormGroup<AnimeFilterForm>;

	/** Available page size options for a select element. */
	protected readonly pageSizeOptions = [5, 10, 25, 50, 100];

	/** A service that works with anime query parameters. */
	protected readonly routeParameterService = inject(AnimeQueryParametersService);

	private readonly animeApiService = inject(AnimeApiService);

	private readonly formBuilder: NonNullableFormBuilder = inject(NonNullableFormBuilder);

	private readonly destroyRef = inject(DestroyRef);

	public constructor() {
		this.paginatedAnime$ = this.getPaginatedAnime();
		this.animeParameters$ = this.routeParameterService.getQueryParameters();
		this.animeFiltersForm = this.initializeFiltersForm();
	}

	/** Subscribes on route parameters when the component is initialized. */
	public ngOnInit(): void {
		this.subscribeToFormChange();
	}

	private subscribeToFormChange(): void {
		this.animeFiltersForm.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe(formValues => {
				this.routeParameterService.changeFilters(formValues.animeTypes ?? undefined, formValues.searchQuery ?? undefined);
			});
	}

	private initializeFiltersForm(): FormGroup<AnimeFilterForm> {
		return AnimeFilterForm.initialize({
			formBuilder: this.formBuilder,
			searchInitialValue: DEFAULT_SEARCH_QUERY,
			typesInitialValue: DEFAULT_TYPE,
		});
	}

	private getPaginatedAnime(): Observable<Pagination<Anime>> {
		return this.routeParameterService.getQueryParameters().pipe(
			switchMap(parameters => this.animeApiService.getAll(parameters)),
		);
	}
}
