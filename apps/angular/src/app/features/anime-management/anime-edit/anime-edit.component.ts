import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderComponent } from '@js-camp/angular/app/features/header/header.component';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, switchMap, of } from 'rxjs';
import { AnimeDetails } from '@js-camp/core/models/anime-details.model';
import { AnimeService } from '@js-camp/angular/core/services/anime.service';
import { CommonModule } from '@angular/common';
import { AnimeGenreService } from '@js-camp/angular/core/services/anime-genre.service';
import { AnimeStudioService } from '@js-camp/angular/core/services/anime-studio.service';
import { AnimeGenre } from '@js-camp/core/models/anime-genre.model';
import { AnimeStudio } from '@js-camp/core/models/anime-studio.model';
import { Router } from '@angular/router';
import { AppRoutes } from '@js-camp/angular/core/utils/enums/app-routes.enum';

import { AnimeDetailsFormComponent } from '../components/anime-form/anime-form.component';

/** Login page component. */
@Component({
	selector: 'camp-anime-edit',
	templateUrl: './anime-edit.component.html',
	styleUrls: ['./anime-edit.component.css'],
	standalone: true,
	imports: [
		HeaderComponent,
		AnimeDetailsFormComponent,
		RouterModule,
		CommonModule,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeEditComponent {

	/** 1. */
	protected readonly animeDetails$: Observable<AnimeDetails | null>;

	/** 1. */
	protected readonly animeGenres$: Observable<AnimeGenre[]>;

	/** 1. */
	protected readonly animeStudios$: Observable<AnimeStudio[]>;

	private readonly route = inject(ActivatedRoute);

	private readonly animeService = inject(AnimeService);

	private readonly animeGenreService = inject(AnimeGenreService);

	private readonly animeStudioService = inject(AnimeStudioService);

	private readonly router = inject(Router);

	private animeGenreSubject = new BehaviorSubject<void>(undefined);

	private animeStudioSubject = new BehaviorSubject<void>(undefined);

	public constructor() {
		this.animeDetails$ = this.route.paramMap.pipe(
			switchMap(params => {
				const id = params.get('id');
				if (id !== null) {
					return this.animeService.getById(Number(id));
				}
				return of(null);
			}),
		);
		this.animeGenres$ = this.animeGenreSubject.pipe(
			switchMap(() => this.animeGenreService.getAll()),
		);
		this.animeStudios$ = this.animeStudioSubject.pipe(
			switchMap(() => this.animeStudioService.getAll())
		);
	}

	/**
	 * 1.
	 * @param genreName 1.
	 */
	protected createNewGenre(genreName: string): void {
		this.animeGenreService.add(genreName).subscribe({
			next: () => {
				this.animeGenreSubject.next();
			},
			error: (error) => {
				console.error('Error adding genre:', error);
			},
		});
	}

	protected onEditSuccess(message: string): void {
		console.log(message);
		this.router.navigate([AppRoutes.Home]);
	}
}
