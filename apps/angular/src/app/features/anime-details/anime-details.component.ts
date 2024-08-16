import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { AnimeService } from '@js-camp/angular/core/services/anime.service';
import { Observable, switchMap, of } from 'rxjs';
import { AnimeDetails } from '@js-camp/core/models/anime-details.model';
import { CommonModule, Location } from '@angular/common';
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
import { MatButtonModule } from '@angular/material/button';

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
		MatButtonModule,
		EmptyPipe,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeDetailsComponent {

	/** Anime details object. */
	protected readonly animeDetails$: Observable<AnimeDetails | null>;

	/** Angular DOM sanitizer. */
	protected readonly sanitizer = inject(DomSanitizer);

	private readonly animeApiService = inject(AnimeService);

	private readonly route = inject(ActivatedRoute);

	private readonly dialog = inject(MatDialog);

	private readonly location = inject(Location);

	public constructor() {
		this.animeDetails$ = this.route.paramMap.pipe(
			switchMap(params => {
				const id = params.get('id');
				if (id !== null) {
					return this.animeApiService.getById(Number(id));
				}
				return of(null);
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

	/** Navigates to the previous page. */
	protected navigateBack(): void {
		this.location.back();
	}

	/**
	 * Handles card image keyboard events.
	 * @param event Card image's keyboard event.
	 * @param imageUrl Card image url.
	 * @param titleJapanese Card image title.
	 */
	protected onImageKeydown(event: KeyboardEvent, imageUrl: string, titleJapanese: string): void {
		if (event.key === 'Enter' || event.key === ' ') {
			this.openImageDialog(imageUrl, titleJapanese);
		}
	}
}
