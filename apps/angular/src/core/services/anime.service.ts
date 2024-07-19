import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAnimeDto } from '@js-camp/core/dtos/get_anime.dto';

import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { Anime } from '@js-camp/core/models/anime';

/** 1. */
@Injectable({
	providedIn: 'root',
})
export class FetchAnimeService {
	private readonly rootUrl = 'https://api.camp-js.saritasa.rocks/api/v1/';

	public constructor(private http: HttpClient) {}

	/** 1. */
	public getAnime(): Observable<Anime[]> {
		const result$ = this.http.get<GetAnimeDto>('anime/anime/');
		const newN$ = result$.pipe(
			map((response: GetAnimeDto) => {
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
