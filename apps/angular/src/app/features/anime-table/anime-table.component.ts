import { MatTableModule } from '@angular/material/table';
import { Component, Input } from '@angular/core';
import { Anime } from '@js-camp/core/models/anime';
import { CommonModule, NgOptimizedImage, DatePipe } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

import { EmptyPipe } from '../../../shared/pipes/empty.pipe';

/** Anime table column names. */
enum AnimeTableColumns {
	Image = 'image',
	TitleEng = 'EnglishTitle',
	TitleJpn = 'JapaneseTitle',
	StartDate = 'startDate',
	Type = 'type',
	Status = 'status',
}

/** Anime table component. */
@Component({
	selector: 'camp-anime-table',
	styleUrl: './anime-table.component.css',
	templateUrl: './anime-table.component.html',
	standalone: true,
	imports: [
		MatTableModule,
		CommonModule,
		NgOptimizedImage,
		MatChipsModule,
		EmptyPipe,
		DatePipe,
	],
})
export class AnimeTableComponent {

	/** Anime table column names. */
	protected readonly animeColumns = AnimeTableColumns;

	/** An array that determines anime table columns order. */
	protected readonly displayedColumns = Object.values(this.animeColumns);

	/** Stream containing anime data from the server. */
	@Input() public animeList: readonly Anime[] | undefined;

	/**
	 * Helps to track changes in anime data by its id.
	 * @param index Index of the given entity.
	 * @param anime Given anime object.
	 */
	protected trackByAnime(index: number, anime: Anime): number {
		return anime.id;
	}
}
