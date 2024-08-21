import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderComponent } from '@js-camp/angular/app/features/header/header.component';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';
import { AnimeDetails } from '@js-camp/core/models/anime-details.model';
import { AnimeService } from '@js-camp/angular/core/services/anime.service';
import { CommonModule } from '@angular/common';
import { AnimeGenreService } from '@js-camp/angular/core/services/anime-genre.service';
import { AnimeStudioService } from '@js-camp/angular/core/services/anime-studio.service';
import { AnimeGenre } from '@js-camp/core/models/anime-genre.model';
import { AnimeStudio } from '@js-camp/core/models/anime-studio.model';

import { AnimeDetailsFormComponent } from '../anime-form/anime-form.component';

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
		this.animeGenres$ = this.animeGenreService.getAll();
		this.animeStudios$ = this.animeStudioService.getAll();
	}
}
