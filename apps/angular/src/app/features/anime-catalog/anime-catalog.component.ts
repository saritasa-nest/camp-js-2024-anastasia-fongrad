import { ChangeDetectionStrategy, Component, inject, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { AnimeTableComponent } from '@js-camp/angular/app/features/anime-catalog/components/anime-table/anime-table.component';
import { HeaderComponent } from '@js-camp/angular/shared/components/header/header.component';
import { MatPaginatorModule, PageEvent, MatPaginator } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AnimeApiService } from '@js-camp/angular/core/services/anime.service';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Pagination } from '@js-camp/core/models/pagination.model';
import { Anime } from '@js-camp/core/models/anime';
import { CommonModule } from '@angular/common';
import { animeSelectType, SelectType } from '@js-camp/angular/core/utils/anime-type-select';
import { ActivatedRoute, Router } from '@angular/router';
import { Sort } from '@angular/material/sort';

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
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
})
export class AnimeCatalogComponent implements OnInit, OnDestroy {
	/** Child MatPaginator component. */
	@ViewChild('paginator') private readonly paginator!: MatPaginator;

	/** An array of available anime types to choose from. */
	protected readonly selectTypes: SelectType[];

	/** A chosen anime type to filter by. */
	protected readonly selectedType: string | null;

	/** A query to search anime by title. */
	protected readonly searchQuery: string | null;

	/** Anime pagination data to be displayed. */
	protected paginationData?: Pagination<Anime>;

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
		this.sortParameters = [];
	}

	/** Subscribes on observables when the component is initialized. */
	public ngOnInit(): void {
		this.routeSubscription = this.route.queryParams.pipe(
			switchMap(params => {
				const offset = +params['offset'] || 0;
				const limit = +params['limit'] || 25;
				const type = params['type'] || null;
				const search = params['search'] || null;
				const ordering = params['ordering'] || null;
				return this.animeApiService.getPagination(offset, limit, type, search, ordering);
			}),
		).subscribe(pagination => {
			this.paginationData = pagination;
		});
		this.router.navigate([], {
			queryParams: {
				offset: 0,
				limit: 5,
			},
			queryParamsHandling: 'merge',
		});
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
				offset: 0,
				type: this.selectedType,
			},
			queryParamsHandling: 'merge',
		});
		this.paginator.pageIndex = 0;
	}

	/** Changes query parameters when a search button is pressed. */
	protected onSearch(): void {
		if (this.searchQuery) {
			this.router.navigate([], {
				queryParams: {
					search: this.searchQuery,
					offset: 0,
				},
				queryParamsHandling: 'merge',
			});
			this.paginator.pageIndex = 0;
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
