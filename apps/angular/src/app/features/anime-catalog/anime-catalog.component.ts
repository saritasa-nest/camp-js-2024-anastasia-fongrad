import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { AnimeTableComponent } from '@js-camp/angular/app/features/anime-catalog/components/anime-table/anime-table.component';
import { HeaderComponent } from '@js-camp/angular/shared/components/header/header.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AnimeApiService } from '@js-camp/angular/core/services/anime-api.service';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Pagination } from '@js-camp/core/models/pagination.model';
import { Anime } from '@js-camp/core/models/anime';
import { CommonModule } from '@angular/common';
import { animeSelectType, SelectType } from '@js-camp/angular/core/utils/anime-type-select';
import { ActivatedRoute, Router } from '@angular/router';
import { Sort } from '@angular/material/sort';
import { START_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@js-camp/angular/core/services/anime-query-parameters';


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
	],
	styleUrl: './anime-catalog.component.css',
	templateUrl: './anime-catalog.component.html',
	standalone: true,
})
export class AnimeCatalogComponent implements OnInit, OnDestroy {
	/** An array of available anime types to choose from. */
	protected readonly selectTypes: SelectType[];

	/** A chosen anime type to filter by. */
	protected selectedType: string | null;

	/** A query to search anime by title. */
	protected searchQuery: string | null;

	/** A number of anime displayed on a current page. */
	protected pageSize: number;

	/** An index of the current page. */
	protected pageIndex: number;

	/** Anime pagination data to be displayed. */
	protected paginatedAnime?: Pagination<Anime>;

	/** An array of parameters to sort anime by. */
	protected readonly sortParameters: string[];

	private routeSubscription?: Subscription;

	private readonly route = inject(ActivatedRoute);

	private router = inject(Router);

	private readonly animeApiService = inject(AnimeApiService);

	public constructor() {
		this.selectTypes = animeSelectType;
		this.searchQuery = null;
		this.selectedType = null;
		this.pageSize = DEFAULT_PAGE_SIZE;
		this.pageIndex = START_PAGE_INDEX;
		this.sortParameters = [];
	}

	/** Subscribes on route parameters when the component is initialized. */
	public ngOnInit(): void {
		this.routeSubscription = this.route.queryParams.pipe(
			switchMap(params => {
				if (Object.keys(params).length === 0) {
					this.router.navigate([], {
						queryParams: {
							offset: START_PAGE_INDEX,
							limit: DEFAULT_PAGE_SIZE,
						},
						queryParamsHandling: 'merge',
					});
				}
				const offset = +params['offset'] || START_PAGE_INDEX;
				const ordering = params['ordering'] || null;
				this.searchQuery = params['search'] || null;
				this.selectedType = params['type'] || null;
				this.pageSize = +params['limit'] || DEFAULT_PAGE_SIZE;
				this.pageIndex = offset / this.pageSize;
				return this.animeApiService.getAll(
					offset,
					this.pageSize,
					this.selectedType,
					this.searchQuery,
					ordering,
				);
			}),
		).subscribe(pagination => {
			this.paginatedAnime = pagination;
		});
	}

	private addQueryParameters(): number {
		return 1;
	}

	/**
	 * Changes query parameters when pagination event occurs.
	 * @param event Page change event.
	 */
	protected onPageChange(event: PageEvent): void {
		this.router.navigate([], {
			queryParams: {
				offset: event.pageIndex * event.pageSize,
				limit: event.pageSize,
			},
			queryParamsHandling: 'merge',
		});
	}

	/** Changes query parameters when a new type is selected. */
	protected onSelectType(): void {
		this.router.navigate([], {
			queryParams: {
				offset: START_PAGE_INDEX,
				type: this.selectedType,
			},
			queryParamsHandling: 'merge',
		});
	}

	/** Changes query parameters when a search button is pressed. */
	protected onSearch(): void {
		if (this.searchQuery) {
			this.router.navigate([], {
				queryParams: {
					search: this.searchQuery,
					offset: START_PAGE_INDEX,
				},
				queryParamsHandling: 'merge',
			});
			return;
		}
		this.router.navigate([], {
			queryParams: {
				search: null,
			},
			queryParamsHandling: 'merge',
		});
	}

	/**
	 * Changes query parameters when sort event is triggered.
	 * @param event Sort event from an anime table.
	 */
	public onSortChange(event: Sort): void {
		const parameter = event.active;
		let order = parameter;
		if (event.direction === 'desc') {
			order = `-${parameter}`;
		}
		if (this.sortParameters.includes(parameter)) {
			const index = this.sortParameters.indexOf(parameter);
			this.sortParameters.splice(index, 1);
		} else if (this.sortParameters.includes(`-${parameter}`)) {
			const index = this.sortParameters.indexOf(`-${parameter}`);
			this.sortParameters.splice(index, 1);
		}
		this.sortParameters.push(order);
		const ordering = this.sortParameters.join(',');
		this.router.navigate([], {
			queryParams: { ordering },
			queryParamsHandling: 'merge',
		});
	}

	/** Resets the order of anime in the table to the original one. */
	public cancelSorting(): void {
		this.sortParameters.splice(0, this.sortParameters.length);
		this.router.navigate([], {
			queryParams: {
				ordering: null,
			},
			queryParamsHandling: 'merge',
		});
	}

	/** Unsubscribes from observables when the component is destroyed. */
	public ngOnDestroy(): void {
		if (this.routeSubscription) {
			this.routeSubscription.unsubscribe();
		}
	}
}
