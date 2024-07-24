import { Component, inject } from '@angular/core';
import { AnimeTableComponent } from '@js-camp/angular/app/features/anime-table/anime-table.component';
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

type AnimeSelectType = {

	/** 1. */
	value: string;

	/** 1. */
	viewValue: string;
};

const animeSelectType: AnimeSelectType[] = [
	{ value: 'steak-0', viewValue: 'Steak' },
	{ value: 'pizza-1', viewValue: 'Pizza' },
	{ value: 'tacos-2', viewValue: 'Tacos' },
];

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
	protected readonly foods: AnimeSelectType[] = animeSelectType;

	/** 1. */
	protected selectedFood = this.foods[2].value;

	/** 1. */
	protected readonly animeApiService = inject(AnimeApiService);

	/** 1. */
	protected paginationData$: Observable<Pagination<Anime>>;

	public constructor() {
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
	}
}
