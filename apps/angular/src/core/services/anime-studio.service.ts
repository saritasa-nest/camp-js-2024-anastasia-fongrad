import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Pagination } from '@js-camp/core/models/pagination.model';
import { PaginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { AnimeStudio } from '@js-camp/core/models/anime-studio.model';
import { AnimeStudioMapper } from '@js-camp/core/mappers/anime-studio-mapper';
import { AnimeStudioDto } from '@js-camp/core/dtos/anime-studio.dto';

import { AppUrlConfig } from './app-url-config.service';

/** 1. */
@Injectable({
	providedIn: 'root',
})
export class AnimeStudioService {

	private readonly http: HttpClient = inject(HttpClient);

	private readonly appUrlConfig = inject(AppUrlConfig);

	/**
	 * Gets paginated anime data from the server.
	 * @param parameters Query parameters for the request.
	 */
	public getAll(): Observable<Pagination<AnimeStudio>> {
		const url = this.appUrlConfig.paths.studiosList;
		const result$ = this.http.get<PaginationDto<AnimeStudioDto>>(url);
		return result$.pipe(
			map((response: PaginationDto<AnimeStudioDto>) =>
				PaginationMapper.fromDto<AnimeStudioDto, AnimeStudio>(response, AnimeStudioMapper.fromDto)),
		);
	}

	/**
	 * 1.
	 * @param animeStudio 1.
	 */
	public add(animeStudio: Partial<AnimeStudio>): Observable<AnimeStudio> {
		const dtoParameters = AnimeStudioMapper.toDto(animeStudio);
		const url = this.appUrlConfig.paths.animeList;
		const result$ = this.http.post<AnimeStudioDto>(url, dtoParameters);
		return result$.pipe(
			map((response: AnimeStudioDto) => AnimeStudioMapper.fromDto(response)),
		);
	}
}
