import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Anime } from '@js-camp/core/models/anime';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { AnimeDto } from '@js-camp/core/dtos/anime.dto';
import { Pagination } from '@js-camp/core/models/pagination.model';
import { PaginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { AnimeQueryParametersDto } from '@js-camp/core/dtos/anime-parameters.dto';

import { AppUrlConfig } from './app-url-config.service';

/** Connects to the API to manage anime data. */
@Injectable({
	providedIn: 'root',
})
export class AnimeApiService {

	private readonly http: HttpClient = inject(HttpClient);

	private readonly apiUrlService = inject(AppUrlConfig);

	/**
	 * Gets paginated anime data from the server.
	 * @param parameters Query parameters for the request.
	 */
	public getAll(parameters: Partial<AnimeQueryParametersDto>): Observable<Pagination<Anime>> {
		const params = new HttpParams({ fromObject: parameters });
		const url = this.apiUrlService.paths.animeCatalog;
		const result$ = this.http.get<PaginationDto<AnimeDto>>(url, { params });
		return result$.pipe(
			map((response: PaginationDto<AnimeDto>) => PaginationMapper.fromDto(response)),
			catchError((error: unknown): Observable<Pagination<Anime>> => {
				console.error(error);
				return throwError(() => error);
			}),
		);
	}
}
