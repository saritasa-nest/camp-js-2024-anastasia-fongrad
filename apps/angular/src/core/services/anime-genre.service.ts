import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Pagination } from '@js-camp/core/models/pagination.model';
import { PaginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { AnimeGenre } from '@js-camp/core/models/anime-genre.model';
import { AnimeGenreMapper } from '@js-camp/core/mappers/anime-genre.mapper';
import { AnimeGenreDto } from '@js-camp/core/dtos/anime-genre.dto';

import { AppUrlConfig } from './app-url-config.service';

/** 1. */
@Injectable({
	providedIn: 'root',
})
export class AnimeGenreService {

	private readonly http: HttpClient = inject(HttpClient);

	private readonly appUrlConfig = inject(AppUrlConfig);

	/**
	 * Gets paginated anime data from the server.
	 * @param parameters Query parameters for the request.
	 */
	public getAll(): Observable<Pagination<AnimeGenre>> {
		const url = this.appUrlConfig.paths.genresList;
		const result$ = this.http.get<PaginationDto<AnimeGenreDto>>(url);
		return result$.pipe(
			map((response: PaginationDto<AnimeGenreDto>) =>
				PaginationMapper.fromDto<AnimeGenreDto, AnimeGenre>(response, AnimeGenreMapper.fromDto)),
		);
	}

	/**
	 * 1.
	 * @param genreName 1.
	 */
	public add(genreName: string): Observable<AnimeGenre> {
		const dtoParameters = {
			name: genreName,
			type: 'GENRES',
		};
		const url = this.appUrlConfig.paths.animeList;
		const result$ = this.http.post<AnimeGenreDto>(url, dtoParameters);
		return result$.pipe(
			map((response: AnimeGenreDto) => AnimeGenreMapper.fromDto(response)),
		);
	}
}
