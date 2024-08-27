import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AnimeTableComponent } from '@js-camp/angular/app/features/anime-catalog/components/anime-table/anime-table.component';
import { HeaderComponent } from '@js-camp/angular/app/features/header/header.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Observable, BehaviorSubject, switchMap } from 'rxjs';
import { Pagination } from '@js-camp/core/models/pagination.model';
import { Anime } from '@js-camp/core/models/anime.model';
import { CommonModule } from '@angular/common';
import { AnimeQueryParametersService } from '@js-camp/angular/core/services/anime-query-parameters.service';
import { AnimeQueryParameters } from '@js-camp/core/models/anime-query-parameters.model';
import { AnimeService } from '@js-camp/angular/core/services/anime.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';

import { AnimeFilterFormComponent } from './components/anime-filter-form/anime-filter-form.component';

/** A component that represents anime catalog page. */
@Component({
	selector: 'camp-anime-catalog',
	imports: [
		AnimeTableComponent,
		AnimeFilterFormComponent,
		HeaderComponent,
		MatPaginatorModule,
		CommonModule,
		RouterModule,
		MatProgressBarModule,
	],
	styleUrl: './anime-catalog.component.css',
	templateUrl: './anime-catalog.component.html',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeCatalogComponent {

	/** Anime pagination data to be displayed. */
	protected readonly paginatedAnime$: Observable<Pagination<Anime>>;

	/** Anime query parameters. */
	protected readonly animeParameters$: Observable<AnimeQueryParameters>;

	/** Available page size options for a select element. */
	protected readonly pageSizeOptions = [5, 10, 25, 50, 100];

	/** A service that works with anime query parameters. */
	protected readonly routeParameterService = inject(AnimeQueryParametersService);

	private readonly animeService = inject(AnimeService);

	private readonly paginatedAnimeSubject = new BehaviorSubject<void>(undefined);

	public constructor() {
		this.paginatedAnime$ = this.paginatedAnimeSubject.pipe(
			switchMap(() => this.getPaginatedAnime())
		);
		this.animeParameters$ = this.routeParameterService.getQueryParameters();
	}

	private getPaginatedAnime(): Observable<Pagination<Anime>> {
		return this.routeParameterService.getQueryParameters().pipe(
			switchMap(parameters => this.animeService.getAll(parameters)),
		);
	}

	/**
	 * 1.
	 * @param anime 1.
	 */
	protected deleteAnime(anime: Anime) {
		this.animeService.deleteById(anime.id).subscribe(
			{
				next: () => {
					this.paginatedAnimeSubject.next();
				},
				error: (error) => {
					console.error(error);
				},
			}
		);
	}
}
