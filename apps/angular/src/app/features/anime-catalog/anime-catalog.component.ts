import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { AnimeTableComponent } from '@js-camp/angular/app/features/anime-catalog/components/anime-table/anime-table.component';
import { HeaderComponent } from '@js-camp/angular/shared/components/header/header.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Subscription, Observable, switchMap } from 'rxjs';
import { Pagination } from '@js-camp/core/models/pagination.model';
import { Anime } from '@js-camp/core/models/anime';
import { CommonModule } from '@angular/common';
import { AnimeQueryParametersService } from '@js-camp/angular/core/services/anime-query-parameters';
import { AnimeQueryParameters } from '@js-camp/core/models/anime-query-parameters.model';
import { AnimeType } from '@js-camp/core/models/enums/model-type.enum';
import { AnimeApiService } from '@js-camp/angular/core/services/anime-api.service';

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
export class AnimeCatalogComponent implements OnInit, OnDestroy {

	/** An array of available anime types to choose from. */
	protected readonly selectTypes = Object.values(AnimeType);

	/** Anime pagination data to be displayed. */
	protected paginatedAnime$: Observable<Pagination<Anime>>;

	/** Anime query parameters. */
	protected animeParameters: AnimeQueryParameters = {
		pageNumber: 0,
		limitPerPage: 5,
		searchQuery: '',
		animeTypes: [],
		animeSort: null,
	};

	/** Available page size options for a select element. */
	protected readonly pageSizeOptions = [5, 10, 25, 50, 100];

	private routeSubscription?: Subscription;

	private formTypeSubscription?: Subscription;

	private formSearchSubscription?: Subscription;

	private readonly animeApiService = inject(AnimeApiService);

	/** A service that works with anime query parameters. */
	protected routeParameterService = inject(AnimeQueryParametersService);

	/** Reactive anime filter form. */
	protected animeForm = new FormGroup({
		animeTypes: new FormControl([] as AnimeType[]),
		searchQuery: new FormControl(''),
	});

	public constructor() {
		this.paginatedAnime$ = this.getPaginatedAnime();
	}

	/** Subscribes on route parameters when the component is initialized. */
	public ngOnInit(): void {
		this.routeSubscription = this.routeParameterService.getParsedQueryParameters().subscribe(animeParameters => {
			this.animeParameters = animeParameters;
			this.animeForm.patchValue({
				animeTypes: animeParameters.animeTypes,
				searchQuery: animeParameters.searchQuery,
			});
		});
		this.formTypeSubscription = this.animeForm.get('animeTypes')?.valueChanges.subscribe((value: AnimeType[] | null) => {
			const animeTypes = value?.map(type => type as AnimeType) ?? [];
			if (JSON.stringify(animeTypes) !== JSON.stringify(this.animeParameters.animeTypes)) {
				this.routeParameterService.changeTypesParameter(animeTypes);
			}
		});
		this.formSearchSubscription = this.animeForm.get('searchQuery')?.valueChanges.subscribe(value => {
			if (value !== this.animeParameters.searchQuery) {
				this.routeParameterService.changeSearchParameter(value ?? '');
			}
		});
	}

	/** Requests paginated anime data when query parameters change. */
	private getPaginatedAnime(): Observable<Pagination<Anime>> {
		return this.routeParameterService.getQueryParameters().pipe(
			switchMap(parameters => this.animeApiService.getAll(parameters)),
		);
	}

	/** Unsubscribes from observables when the component is destroyed. */
	public ngOnDestroy(): void {
		if (this.routeSubscription) {
			this.routeSubscription.unsubscribe();
		}
		if (this.formSearchSubscription) {
			this.formSearchSubscription.unsubscribe();
		}
		if (this.formTypeSubscription) {
			this.formTypeSubscription.unsubscribe();
		}
	}
}
