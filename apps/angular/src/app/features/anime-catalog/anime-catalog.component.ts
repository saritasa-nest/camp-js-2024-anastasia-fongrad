import { Component, inject } from '@angular/core';
import { AnimeTableComponent } from '@js-camp/angular/app/features/anime-catalog/components/anime-table/anime-table.component';
import { HeaderComponent } from '@js-camp/angular/shared/components/header/header.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AnimeApiService } from '@js-camp/angular/core/services/anime.service';
import { Observable } from 'rxjs';
import { Pagination } from '@js-camp/core/models/pagination.model';
import { Anime } from '@js-camp/core/models/anime';
import { CommonModule } from '@angular/common';
import { animeSelectType, AnimeSelectType } from '@js-camp/angular/core/utils/anime-type-select';
import { Router } from '@angular/router';

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

export class AnimeCatalogComponent {
	/** 1. */
	protected readonly selectTypes: AnimeSelectType[];

	/** 1. */
	protected readonly selectedType: string;

	/** 1. */
	protected readonly searchQuery: string | null;

	/** 1. */
	protected readonly animeApiService = inject(AnimeApiService);

	/** 1. */
	protected paginationData$: Observable<Pagination<Anime>>;

	public constructor(private router: Router) {
		this.selectTypes = animeSelectType;
		this.searchQuery = null;
		this.selectedType = this.selectTypes[0].value;
		this.animeApiService.type = this.selectedType;
		this.paginationData$ = this.animeApiService.getPagination();
	}

	/**
	 * 1.
	 * @param event 1.
	 */
	protected onPageChange(event: PageEvent): void {
		this.animeApiService.limitPerPage = event.pageSize;
		this.animeApiService.offset = event.pageIndex * event.pageSize;
		this.paginationData$ = this.animeApiService.getPagination();
		this.router.navigate([], {
			queryParams: {
				offset: this.animeApiService.offset,
				limit: this.animeApiService.limitPerPage,
			},
			queryParamsHandling: 'merge',
		});
	}

	/** 1. */
	protected onSelectType(): void {
		this.animeApiService.type = this.selectedType;
		this.animeApiService.offset = 0;
		this.paginationData$ = this.animeApiService.getPagination();
	}

	/** 1. */
	protected onSearch(): void {
		this.animeApiService.search = this.searchQuery;
		this.animeApiService.offset = 0;
		this.paginationData$ = this.animeApiService.getPagination();
	}
}
