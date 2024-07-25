import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { Anime } from '@js-camp/core/models/anime';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { AnimeDto } from '@js-camp/core/dtos/anime.dto';

/** Connects to the API to manage anime data. */
@Injectable({
	providedIn: 'root',
})
export class AnimeApiService {

	private http: HttpClient = inject(HttpClient);

	/** Get anime list. */
	public getAnimeList(): Observable<Anime[]> {
		return this.http.get<PaginationDto<AnimeDto>>('anime/anime/').pipe(
			map((response: PaginationDto<AnimeDto>) => response.results.map(dto => AnimeMapper.fromDto(dto))),
			catchError((error: unknown): Observable<Anime[]> => {
				console.error(error);
				return EMPTY;
			}),
			take(3),
		);
	}
}
