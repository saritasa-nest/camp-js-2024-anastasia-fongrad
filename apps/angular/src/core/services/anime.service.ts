import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { Anime } from '@js-camp/core/models/anime';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { AnimeDto } from '@js-camp/core/dtos/anime.dto';

/** Fetches anime data from the server. */
@Injectable({
	providedIn: 'root',
})
export class AnimeApiService {

	public constructor(private http: HttpClient) {}

	/** 1. */
	public getAnime(): Observable<Anime[]> {
		const result$ = this.http.get<PaginationDto<AnimeDto>>('anime/anime/');
		const newN$ = result$.pipe(
			map((response: PaginationDto<AnimeDto>) => {
				if ('results' in response) {
					const animeResult = response.results.map(dto => AnimeMapper.fromDto(dto));
					return animeResult;
				}
				console.error(response);
				return [];
			}),
		);
		return newN$;
	}
}
