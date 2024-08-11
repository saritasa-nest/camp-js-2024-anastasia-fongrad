import { Component, inject } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { AnimeApiService } from '@js-camp/angular/core/services/anime-api.service';
import { Observable, switchMap } from 'rxjs';
import { AnimeDetails } from '@js-camp/core/models/anime-details.model';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { EmptyPipe } from '@js-camp/angular/shared/pipes/empty.pipe';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { HeaderComponent } from '../header/header.component';

import { ImageDialogComponent } from './components/image-dialog/image-dialog.component';

/** Anime details page component. */
@Component({
	selector: 'camp-anime-details',
	templateUrl: './anime-details.component.html',
	styleUrls: ['./anime-details.component.css'],
	standalone: true,
	imports: [
		RouterModule,
		HeaderComponent,
		CommonModule,
		MatListModule,
		MatProgressBarModule,
		MatChipsModule,
		MatCardModule,
		MatTooltip,
		MatIconModule,
		MatDividerModule,
		EmptyPipe,
	],
})
export class AnimeDetailsComponent {

	/** Anime details object. */
	protected readonly animeDetails$: Observable<AnimeDetails>;

	/** Angular DOM sanitizer. */
	protected readonly sanitizer = inject(DomSanitizer);

	private readonly animeApiService = inject(AnimeApiService);

	private readonly route = inject(ActivatedRoute);

	private readonly dialog = inject(MatDialog);

	public constructor() {
		this.animeDetails$ = this.route.paramMap.pipe(
			switchMap(params => {
				const id = Number(params.get('id'));
				return this.animeApiService.getDetails(id);
			}),
		);
	}

	/**
	 * Opens a dialog box with a full-size image of the anime.
	 * @param imageUrl Anime image url.
	 * @param imageTitle Anime image title.
	 */
	protected openImageDialog(imageUrl: string, imageTitle: string): void {
		this.dialog.open(ImageDialogComponent, {
			data: {
				imageUrl,
				imageTitle,
			},
			panelClass: 'full-screen-dialog',
		});
	}
}
