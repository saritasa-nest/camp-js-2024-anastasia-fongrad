import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderComponent } from '@js-camp/angular/app/features/header/header.component';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';
import { AnimeDetails } from '@js-camp/core/models/anime-details.model';
import { AnimeService } from '@js-camp/angular/core/services/anime.service';
import { CommonModule } from '@angular/common';

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

	private readonly route = inject(ActivatedRoute);

	private readonly animeService = inject(AnimeService);

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
	}
}
