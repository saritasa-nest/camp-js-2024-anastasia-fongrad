import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderComponent } from '@js-camp/angular/app/features/header/header.component';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, switchMap, of } from 'rxjs';
import { AnimeDetails } from '@js-camp/core/models/anime-details.model';
import { AnimeService } from '@js-camp/angular/core/services/anime.service';
import { CommonModule, Location } from '@angular/common';
import { AnimeGenreService } from '@js-camp/angular/core/services/anime-genre.service';
import { AnimeStudioService } from '@js-camp/angular/core/services/anime-studio.service';
import { AnimeGenre } from '@js-camp/core/models/anime-genre.model';
import { AnimeStudio } from '@js-camp/core/models/anime-studio.model';
import { AppRoutes } from '@js-camp/angular/core/utils/enums/app-routes.enum';
import { MatButtonModule } from '@angular/material/button';

import { AnimeDetailsFormComponent } from '../components/anime-form/anime-form.component';

/** Anime edit page component. */
@Component({
	selector: 'camp-anime-edit',
	templateUrl: './anime-edit.component.html',
	styleUrls: ['./anime-edit.component.css'],
	standalone: true,
	imports: [
		HeaderComponent,
		MatButtonModule,
		AnimeDetailsFormComponent,
		RouterModule,
		CommonModule,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeEditComponent {

	/** Anime details. */
	protected readonly animeDetails$: Observable<AnimeDetails | null>;

	/** Anime genres. */
	protected readonly animeGenres$: Observable<AnimeGenre[]>;

	/** Anime studios. */
	protected readonly animeStudios$: Observable<AnimeStudio[]>;

	private readonly route = inject(ActivatedRoute);

	private readonly animeService = inject(AnimeService);

	private readonly animeGenreService = inject(AnimeGenreService);

	private readonly animeStudioService = inject(AnimeStudioService);

	private readonly router = inject(Router);

	private readonly location = inject(Location);

	private readonly animeGenreSubject$ = new BehaviorSubject<void>(undefined);

	private readonly animeStudioSubject$ = new BehaviorSubject<void>(undefined);

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
		this.animeGenres$ = this.animeGenreSubject$.pipe(
			switchMap(() => this.animeGenreService.getAll()),
		);
		this.animeStudios$ = this.animeStudioSubject$.pipe(
			switchMap(() => this.animeStudioService.getAll()),
		);
	}

	/** Navigates to the previous page. */
	protected navigateBack(): void {
		this.location.back();
	}

	/**
	 * Creates new anime genre.
	 * @param genreName Name of the genre being created.
	 */
	protected createNewGenre(genreName: string): void {
		this.animeGenreService.add(genreName).subscribe(() => this.animeGenreSubject$.next());
	}

	/**
	 * 1.
	 * @param animeStudio 1.
	 */
	protected createNewStudio(animeStudio: Partial<AnimeStudio>): void {
		this.animeStudioService.add(animeStudio).subscribe(() => this.animeStudioSubject$.next());
	}

	/**
	 * Handles anime edit success.
	 * @param message Form success message.
	 */
	protected onEditSuccess(message: string): void {
		console.log(message);
		this.router.navigate([AppRoutes.Home]);
	}
}
