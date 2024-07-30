import { MatTableModule } from '@angular/material/table';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Anime } from '@js-camp/core/models/anime';
import { CommonModule, NgOptimizedImage, DatePipe } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatSortModule, Sort } from '@angular/material/sort';
import { AnimeSortField } from '@js-camp/core/models/enums/model-sort-parameter.enum';
import { Subscription } from 'rxjs';
import { SortParameter } from '@js-camp/core/models/sort.model';

import { EmptyPipe } from '../../../../../shared/pipes/empty.pipe';

/** Anime table column ids. */
enum AnimeTableColumnIds {
	Image = 'image',
	EnglishTitle = 'title_eng',
	JapaneseTitle = 'title_jpn',
	StartDate = 'aired__startswith',
	Type = 'type',
	Status = 'status',
}

/** Anime table column names. */
enum AnimeTableColumnNames {
	Image = 'Image',
	EnglishTitle = 'English Title',
	JapaneseTitle = 'Japanese Title',
	StartDate = 'Start Date',
	Type = 'Type',
	Status = 'Status',
}

/**
 * Converts column name to a valid sort parameter name.
 * @param column Column name to sort by.
 */
function mapColumnToSortParameter(column: AnimeTableColumnIds): AnimeSortField | null {
	const columnMap: Partial<Record<AnimeTableColumnIds, AnimeSortField | null>> = {
		[AnimeTableColumnIds.EnglishTitle]: AnimeSortField.EnglishTitle,
		[AnimeTableColumnIds.StartDate]: AnimeSortField.StartDate,
		[AnimeTableColumnIds.Status]: AnimeSortField.Status,
	};
	return columnMap[column] ?? null;
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
		MatSortModule,
	],
})
export class AnimeTableComponent {

	/** Anime table column ids. */
	protected readonly animeColumnIds = AnimeTableColumnIds;

	/** Anime table column names. */
	protected readonly animeColumnNames = AnimeTableColumnNames;

	/** An array that determines anime table columns order. */
	protected readonly displayedColumns = Object.values(this.animeColumnIds);

	private sortSubscription?: Subscription;

	/** Stream containing anime data from the server. */
	@Input() public animeList: readonly Anime[] | undefined;

	/** Event emitter for a sort table event. */
	@Output() public sortChange = new EventEmitter<SortParameter>();

	/**
	 * Emits sort table event to the parent component.
	 * @param event Sort table event.
	 */
	public emitSortChange(event: Sort): void {
		const mappedSortParameter = mapColumnToSortParameter(event.active as AnimeTableColumnIds);
		let direction: 'ascending' | 'descending' | '' = '';
		if (event.direction === 'asc') {
			direction = 'ascending';
		} else if (event.direction === 'desc') {
			direction = 'descending';
		}
		if (mappedSortParameter) {
			const newEvent: SortParameter = {
				parameterName: mappedSortParameter,
				direction,
			};
			this.sortChange.emit(newEvent);
		}
	}

	/**
	 * Helps to track changes in anime data by its id.
	 * @param index Index of the given entity.
	 * @param anime Given anime object.
	 */
	protected trackByAnime(index: number, anime: Anime): number {
		return anime.id;
	}
}
