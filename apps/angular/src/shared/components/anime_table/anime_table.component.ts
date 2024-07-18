import { MatTableModule } from '@angular/material/table';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FetchAnimeService } from '@js-camp/angular/core/services/anime.service';
import { Anime } from '@js-camp/core/models/anime';
import { Observable } from 'rxjs';
import { CommonModule, NgOptimizedImage, DatePipe } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

import { EmptyPipe } from '../../pipes/empty.pipe';

/** 1. */
@Component({
	selector: 'anime-table',
	styleUrl: './anime_table.component.css',
	templateUrl: './anime_table.component.html',
	standalone: true,
	imports: [MatTableModule, CommonModule, NgOptimizedImage, MatChipsModule, EmptyPipe, DatePipe],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeTableComponent implements OnInit {
	/** 1. */
	public displayedColumns: string[] = ['image', 'titleEng', 'titleJpn', 'startDate', 'type', 'status'];

	/** 1. */
	protected animeData$!: Observable<Anime[]>;

	public constructor(private fetchAnimeService: FetchAnimeService) {}

	/** 1. */
	public ngOnInit(): void {
		this.animeData$ = this.fetchAnimeService.getAnime();
	}
}
