import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { Anime } from '@js-camp/core/models/anime';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { AnimeDto } from '@js-camp/core/dtos/anime.dto';

/** Connects to the API to manage anime data. */
@Injectable({
	providedIn: 'root',
})
export class AnimeApiService {

	public constructor(private http: HttpClient) {}

	/** Get anime list. */
	public getAnimeList(): Observable<Anime[]> {
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
