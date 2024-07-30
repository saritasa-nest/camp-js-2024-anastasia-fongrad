import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { AnimeTableComponent } from '@js-camp/angular/app/features/anime-catalog/components/anime-table/anime-table.component';
import { HeaderComponent } from '@js-camp/angular/shared/components/header/header.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Subscription, Observable } from 'rxjs';
import { Pagination } from '@js-camp/core/models/pagination.model';
import { Anime } from '@js-camp/core/models/anime';
import { CommonModule } from '@angular/common';
import { Sort } from '@angular/material/sort';
import { AnimeQueryParametersService } from '@js-camp/angular/core/services/anime-query-parameters';
import { AnimeQueryParameters } from '@js-camp/core/models/anime-parameters.model';
import { AnimeSortField } from '@js-camp/core/models/enums/model-sort-parameter.enum';
import { AnimeType } from '@js-camp/core/models/enums/model-type.enum';

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
		FormsModule,
		MatIconModule,
		MatButtonModule,
		CommonModule,
		ReactiveFormsModule,
	],
	styleUrl: './anime-catalog.component.css',
	templateUrl: './anime-catalog.component.html',
	standalone: true,
})
export class AnimeCatalogComponent implements OnInit, OnDestroy {
	/** An array of available anime types to choose from. */
	protected readonly selectTypes = Object.values(AnimeType);

	/** Anime pagination data to be displayed. */
	protected paginatedAnime$: Observable<Pagination<Anime>>;

	/** Anime query parameters. */
	protected animeParameters: AnimeQueryParameters = new AnimeQueryParameters({});

	/** Available page size options for a select element. */
	protected readonly pageSizeOptions = [5, 10, 25, 50, 100];

	private routeSubscription?: Subscription;

	private routeParameterService = inject(AnimeQueryParametersService);

	/** 1. */
	protected animeForm = new FormGroup({
		animeType: new FormControl(''),
		searchQuery: new FormControl(''),
	});

	public constructor() {
		this.paginatedAnime$ = this.routeParameterService.getPaginatedAnime();
	}

	/** Subscribes on route parameters when the component is initialized. */
	public ngOnInit(): void {
		this.routeSubscription = this.routeParameterService.getQueryParameters().subscribe(animeParameters => {
			this.animeParameters = animeParameters;
		});
		this.animeForm.get('animeType')?.valueChanges.subscribe(value => {
			this.animeParameters.animeType = value?.split(',').map(type => AnimeType[type as keyof typeof AnimeType]) ?? [];
			this.onSelectType();
		});
		this.animeForm.get('searchQuery')?.valueChanges.subscribe(value => {
			this.animeParameters.searchQuery = value ?? '';
			this.onSearch();
		});
	}

	/**
	 * Changes query parameters when pagination event occurs.
	 * @param event Page change event.
	 */
	protected onPageChange(event: PageEvent): void {
		this.animeParameters.offset = event.pageIndex * event.pageSize;
		this.animeParameters.limitPerPage = event.pageSize;
		this.routeParameterService.navigate(this.animeParameters);
	}

	/** Changes query parameters when a new type is selected. */
	protected onSelectType(): void {
		this.animeParameters.offset = 0;
		this.routeParameterService.navigate(this.animeParameters);
	}

	/** Changes query parameters when a search button is pressed. */
	protected onSearch(): void {
		this.animeParameters.offset = 0;
		this.routeParameterService.navigate(this.animeParameters);
	}

	/**
	 * Changes query parameters when sort event is triggered.
	 * @param event Sort event from an anime table.
	 */
	protected onSortChange(event: Sort): void {
		const parameterName = event.active as AnimeSortField;
		const parameterOrder = event.direction !== 'desc';
		const existingParameterIndex = this.animeParameters.animeOrdering.findIndex(
			p => p.parameterName === parameterName,
		);
		if (existingParameterIndex !== -1) {
			this.animeParameters.animeOrdering.splice(existingParameterIndex, 1);
		}
		this.animeParameters.animeOrdering.push({
			parameterName,
			parameterOrder,
		});
		this.routeParameterService.navigate(this.animeParameters);
	}

	/** Resets the order of anime in the table to the original one. */
	protected cancelSorting(): void {
		this.animeParameters.animeOrdering.splice(0, this.animeParameters.animeOrdering.length);
		this.routeParameterService.navigate(this.animeParameters);
	}

	/** Unsubscribes from observables when the component is destroyed. */
	public ngOnDestroy(): void {
		if (this.routeSubscription) {
			this.routeSubscription.unsubscribe();
		}
	}
}
