import { MatTableModule } from '@angular/material/table';
import { Component, Input, Output, EventEmitter, inject, ChangeDetectionStrategy } from '@angular/core';
import { Anime } from '@js-camp/core/models/anime.model';
import { CommonModule, NgOptimizedImage, DatePipe } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatSortModule, Sort } from '@angular/material/sort';
import { AnimeSortField } from '@js-camp/core/models/enums/anime-sort-field.enum';
import { AnimeSortParameter } from '@js-camp/core/models/anime-sort-parameter.model';
import { EnumUtils } from '@js-camp/core/utils/enum-utils';
import { AnimeSortDirections } from '@js-camp/core/models/enums/anime-sort-directions.enum';
import { Router } from '@angular/router';
import { EmptyPipe } from '@js-camp/angular/shared/pipes/empty.pipe';

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
function mapColumnToSortParameter(column: AnimeTableColumnIds | null): AnimeSortField | null {
	const columnMap: Partial<Record<AnimeTableColumnIds, AnimeSortField | null>> = {
		[AnimeTableColumnIds.EnglishTitle]: AnimeSortField.EnglishTitle,
		[AnimeTableColumnIds.StartDate]: AnimeSortField.StartDate,
		[AnimeTableColumnIds.Status]: AnimeSortField.Status,
	};
	return column ? (columnMap[column] ?? null) : null;
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
	changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AnimeTableComponent {

	/** Anime table column ids. */
	protected readonly animeColumnIds = AnimeTableColumnIds;

	/** Anime table column names. */
	protected readonly animeColumnNames = AnimeTableColumnNames;

	/** An array that determines anime table columns order. */
	protected readonly displayedColumns = Object.values(this.animeColumnIds);

	/** Stream containing anime data from the server. */
	@Input()
	public animeList?: readonly Anime[];

	/** An initial value for the table sorting. */
	@Input()
	public sorting?: AnimeSortParameter;

	/** Event emitter for a sort table event. */
	@Output()
	public readonly sortChange = new EventEmitter<AnimeSortParameter>();

	private readonly router = inject(Router);

	/**
	 * Emits sort table event to the parent component.
	 * @param event Sort table event.
	 */
	protected onSortChange(event: Sort): void {
		const parameterName = mapColumnToSortParameter(EnumUtils.fromString(event.active, AnimeTableColumnIds));
		const direction = EnumUtils.fromString(event.direction, AnimeSortDirections) ?? AnimeSortDirections.Empty;
		if (parameterName) {
			const newEvent: AnimeSortParameter = {
				parameterName,
				direction,
			};
			this.sortChange.emit(newEvent);
		}
	}

	/**
	 * Helps to track changes in anime data by its id.
	 * @param _index Index of the given entity.
	 * @param anime Given anime object.
	 */
	protected trackByAnime(_index: number, anime: Anime): number {
		return anime.id;
	}

	/**
	 * Navigates to the anime details page.
	 * @param anime Selected anime to navigate to.
	 */
	protected showDetails(anime: Anime): void {
		this.router.navigate(['/anime', anime.id]);
	}

	/**
	 * Handles table's keyboard events.
	 * @param event Table's keyboard event.
	 * @param anime Selected anime.
	 */
	protected onRowKeydown(event: KeyboardEvent, anime: Anime): void {
		if (event.key === 'Enter' || event.key === ' ') {
			this.showDetails(anime);
		}
	}
}
