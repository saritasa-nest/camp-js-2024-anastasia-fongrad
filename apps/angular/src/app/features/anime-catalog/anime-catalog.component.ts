import { Component, inject, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { AnimeTableComponent } from '@js-camp/angular/app/features/anime-catalog/components/anime-table/anime-table.component';
import { HeaderComponent } from '@js-camp/angular/shared/components/header/header.component';
import { MatPaginatorModule } from '@angular/material/paginator';
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
import { AnimeQueryParametersService } from '@js-camp/angular/core/services/anime-query-parameters';
import { AnimeQueryParameters } from '@js-camp/core/models/anime-parameters.model';
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

	/** Event emitter for sorting cancelling. */
	public cancelSorting = new EventEmitter<void>();

	/** An array of available anime types to choose from. */
	protected readonly selectTypes = Object.values(AnimeType);

	/** Anime pagination data to be displayed. */
	protected paginatedAnime$: Observable<Pagination<Anime>>;

	/** Anime query parameters. */
	protected animeParameters: AnimeQueryParameters = {
		offset: 0,
		limitPerPage: 5,
		searchQuery: '',
		animeType: [],
		animeOrdering: [],
	};

	/** Available page size options for a select element. */
	protected readonly pageSizeOptions = [5, 10, 25, 50, 100];

	private routeSubscription?: Subscription;

	private formTypeSubscription?: Subscription;

	private formSearchSubscription?: Subscription;

	/** A service that works with anime query parameters. */
	protected routeParameterService = inject(AnimeQueryParametersService);

	/** Reactive anime filter form. */
	protected animeForm = new FormGroup({
		animeType: new FormControl([] as AnimeType[]),
		searchQuery: new FormControl(''),
	});

	public constructor() {
		this.paginatedAnime$ = this.routeParameterService.getPaginatedAnime();
	}

	/** Subscribes on route parameters when the component is initialized. */
	public ngOnInit(): void {
		this.routeSubscription = this.routeParameterService.getQueryParameters().subscribe(animeParameters => {
			this.animeParameters = animeParameters;
			this.animeForm.patchValue({
				animeType: animeParameters.animeType ?? [],
				searchQuery: animeParameters.searchQuery,
			});
		});
		this.formTypeSubscription = this.animeForm.get('animeType')?.valueChanges.subscribe(value => {
			const animeType = value?.map(type => type as AnimeType) ?? [];
			this.routeParameterService.onSelectType(animeType);
		});
		this.formSearchSubscription = this.animeForm.get('searchQuery')?.valueChanges.subscribe(value => {
			this.routeParameterService.onSearch(value ?? '');
		});
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

	/** Resets table order to the default one. */
	protected stopSorting(): void {
		this.cancelSorting.emit();
		this.routeParameterService.cancelSorting();
	}
}
