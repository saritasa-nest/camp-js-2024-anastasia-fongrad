import { Component, inject, ViewChild, OnInit, OnDestroy } from '@angular/core';
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
import { animeSelectType, AnimeSelectType } from '@js-camp/angular/core/utils/anime-type-select';
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
	standalone: true,
})

export class AnimeCatalogComponent implements OnInit, OnDestroy {
	/** 1. */
	@ViewChild('paginator') private paginator!: MatPaginator;

	/** 1. */
	protected readonly selectTypes: AnimeSelectType[];

	/** 1. */
	protected readonly selectedType: string;

	/** 1. */
	protected readonly searchQuery: string | null;

	/** 1. */
	protected readonly animeApiService = inject(AnimeApiService);

	/** 1. */
	protected paginationData?: Pagination<Anime>;

	private routeSubscription?: Subscription;

	private route = inject(ActivatedRoute);

	private router = inject(Router);

	public constructor() {
		this.selectTypes = animeSelectType;
		this.searchQuery = null;
		this.selectedType = this.selectTypes[0].value;
	}

	/** 1. */
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
	 * 1.
	 * @param event 1.
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

	/** 1. */
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

	/** 1. */
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
	 * 1.
	 * @param event 1.
	 */
	public onSortChange(event: Sort): void {
		let ordering = event.active;
		if (event.direction === 'desc') {
			ordering = `-${ordering}`;
		}

		this.router.navigate([], {
			queryParams: { ordering },
			queryParamsHandling: 'merge',
		});
	}

	/** 1. */
	public ngOnDestroy(): void {
		if (this.routeSubscription) {
			this.routeSubscription?.unsubscribe();
		}
	}
}
