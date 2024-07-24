import { Component, inject, ViewChild } from '@angular/core';
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
	protected paginationData$: Observable<Pagination<Anime>>;

	public constructor(private router: Router) {
		this.selectTypes = animeSelectType;
		this.searchQuery = null;
		this.selectedType = this.selectTypes[0].value;
		this.animeApiService.type = this.selectedType;
		this.paginationData$ = this.animeApiService.paginationData$;
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
		this.router.navigate([], {
			queryParams: {
				search: this.searchQuery,
				offset: 0,
			},
			queryParamsHandling: 'merge',
		});
		this.paginator.pageIndex = 0;
	}
}
