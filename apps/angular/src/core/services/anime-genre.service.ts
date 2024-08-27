import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
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

	/** Gets paginated anime genres from the server. */
	public getPaginated(): Observable<Pagination<AnimeGenre>> {
		const url = this.appUrlConfig.paths.genresList;
		const result$ = this.http.get<PaginationDto<AnimeGenreDto>>(url);
		return result$.pipe(
			map((response: PaginationDto<AnimeGenreDto>) =>
				PaginationMapper.fromDto<AnimeGenreDto, AnimeGenre>(response, AnimeGenreMapper.fromDto)),
		);
	}

	/** Gets all the anime genres from the server. */
	public getAll(): Observable<AnimeGenre[]> {
		return this.getPaginated().pipe(
			switchMap((pagination: Pagination<AnimeGenre>) => {
				const url = `${this.appUrlConfig.paths.genresList}?limit=${pagination.totalCount}`;
				return this.http.get<PaginationDto<AnimeGenreDto>>(url).pipe(
					map((response: PaginationDto<AnimeGenreDto>) =>
						response.results.map(AnimeGenreMapper.fromDto)),
				);
			}),
		);
	}

	/**
	 * Creates a new anime genre.
	 * @param genreName Name of the created genre.
	 */
	public add(genreName: string): Observable<AnimeGenre> {
		const dtoParameters = {
			name: genreName,
			type: 'GENRES',
		};
		console.log(dtoParameters);
		const url = this.appUrlConfig.paths.genresList;
		return this.http.post<AnimeGenreDto>(url, dtoParameters).pipe(
			map((response: AnimeGenreDto) => {
				console.log(response);
				return AnimeGenreMapper.fromDto(response);
			}),
		);
	}
}
