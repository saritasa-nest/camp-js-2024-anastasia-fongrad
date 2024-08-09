import { Component, inject } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { AnimeApiService } from '@js-camp/angular/core/services/anime-api.service';
import { Observable, switchMap } from 'rxjs';
import { AnimeDetailed } from '@js-camp/core/models/anime-detailed.model';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { EmptyPipe } from '@js-camp/angular/shared/pipes/empty.pipe';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';

import { HeaderComponent } from '../header/header.component';

import { ImagePopupComponent } from './components/image-popup/image-popup.component';

/** Main app component. */
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
		EmptyPipe,
	],
})
export class AnimeDetailsComponent {

	/** 1. */
	protected readonly animeDetails$: Observable<AnimeDetailed>;

	private readonly animeApiService = inject(AnimeApiService);

	private readonly route = inject(ActivatedRoute);

	private readonly dialog = inject(MatDialog);

	/** 1. */
	protected readonly sanitizer = inject(DomSanitizer);

	public constructor() {
		this.animeDetails$ = this.route.paramMap.pipe(
			switchMap(params => {
				const id = Number(params.get('id'));
				return this.animeApiService.getDetails(id);
			}),
		);
	}

	/**
	 * 1.
	 * @param imageUrl 1.
	 * @param imageTitle 1.
	 */
	protected openImageDialog(imageUrl: string, imageTitle: string): void {
		this.dialog.open(ImagePopupComponent, {
			data: {
				imageUrl,
				imageTitle,
			},
			panelClass: 'full-screen-dialog',
		});
	}
}
