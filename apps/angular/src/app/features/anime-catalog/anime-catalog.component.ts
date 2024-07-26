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
import { AnimeQueryParametersService } from '@js-camp/angular/core/services/anime-query-parameters';


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

	private routeParameterService = inject(AnimeQueryParametersService);

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
		this.routeSubscription = this.routeParameterService.handleRouteParameters().subscribe(pagination => {
			this.paginatedAnime = pagination;
		});
	}

	/**
	 * Changes query parameters when pagination event occurs.
	 * @param event Page change event.
	 */
	protected onPageChange(event: PageEvent): void {
		this.routeParameterService.navigate({
			offset: event.pageIndex * event.pageSize,
			limit: event.pageSize,
		});
	}

	/** Changes query parameters when a new type is selected. */
	protected onSelectType(): void {
		this.routeParameterService.navigate({
			offset: START_PAGE_INDEX,
			type: this.selectedType,
		});
	}

	/** Changes query parameters when a search button is pressed. */
	protected onSearch(): void {
		if (this.searchQuery) {
			this.routeParameterService.navigate({
				search: this.searchQuery,
				offset: START_PAGE_INDEX,
		  	});
			return;
		}
		this.routeParameterService.navigate({
			search: null,
		});
	}

	/**
	 * Changes query parameters when sort event is triggered.
	 * @param event Sort event from an anime table.
	 */
	protected onSortChange(event: Sort): void {
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
		this.routeParameterService.navigate({ ordering });
	}

	/** Resets the order of anime in the table to the original one. */
	protected cancelSorting(): void {
		this.sortParameters.splice(0, this.sortParameters.length);
		this.routeParameterService.navigate({
			ordering: null,
		});
	}

	/** Unsubscribes from observables when the component is destroyed. */
	public ngOnDestroy(): void {
		if (this.routeSubscription) {
			this.routeSubscription.unsubscribe();
		}
	}
}
