import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderComponent } from '@js-camp/angular/app/features/header/header.component';
import { RouterModule, Router } from '@angular/router';
import { AnimeGenreService } from '@js-camp/angular/core/services/anime-genre.service';
import { AnimeStudioService } from '@js-camp/angular/core/services/anime-studio.service';
import { Observable, BehaviorSubject, switchMap } from 'rxjs';
import { AnimeGenre } from '@js-camp/core/models/anime-genre.model';
import { AnimeStudio } from '@js-camp/core/models/anime-studio.model';
import { Location } from '@angular/common';
import { AppRoutes } from '@js-camp/angular/core/utils/enums/app-routes.enum';
import { MatButtonModule } from '@angular/material/button';

import { AnimeDetailsFormComponent } from '../components/anime-form/anime-form.component';

/** Anime create page component. */
@Component({
	selector: 'camp-anime-create',
	templateUrl: './anime-create.component.html',
	styleUrls: ['./anime-create.component.css'],
	standalone: true,
	imports: [
		HeaderComponent,
		MatButtonModule,
		AnimeDetailsFormComponent,
		RouterModule,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeCreateComponent {

	/** 1. */
	protected readonly animeGenres$: Observable<AnimeGenre[]>;

	/** 1. */
	protected readonly animeStudios$: Observable<AnimeStudio[]>;

	private readonly animeGenreService = inject(AnimeGenreService);

	private readonly animeStudioService = inject(AnimeStudioService);

	private readonly router = inject(Router);

	private readonly location = inject(Location);

	private readonly animeGenreSubject$ = new BehaviorSubject<void>(undefined);

	private readonly animeStudioSubject$ = new BehaviorSubject<void>(undefined);

	public constructor() {
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
	 * 1.
	 * @param message 1.
	 */
	protected onAnimeCreate(message: string): void {
		console.log(message);
		this.router.navigate([AppRoutes.Home]);
	}
}
