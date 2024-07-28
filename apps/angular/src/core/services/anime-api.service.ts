import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Anime } from '@js-camp/core/models/anime';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { AnimeDto } from '@js-camp/core/dtos/anime.dto';
import { Pagination } from '@js-camp/core/models/pagination.model';
import { PaginationMapper } from '@js-camp/core/mappers/pagination.mapper';

import { RequestParameters } from '../utils/request-parameters.enum';

import { ApiUrlService } from './api-url.service';

/** Connects to the API to manage anime data. */
@Injectable({
	providedIn: 'root',
})
export class AnimeApiService {

	private readonly http: HttpClient = inject(HttpClient);

	private readonly apiUtlService = inject(ApiUrlService);

	/**
	 * Gets pagination data from the API.
	 * @param offset A number of anime to pass in a list.
	 * @param limit Max number of anime objects on a page.
	 * @param type A type of an anime to filter by.
	 * @param search A query to search anime by their title.
	 * @param ordering A string with sorting options separated by commas.
	 * @returns A flow with pagination data.
	 */
	public getAll(
		offset: number,
		limit: number,
		type: string | null,
		search: string | null,
		ordering: string | null,
	): Observable<Pagination<Anime>> {
		let params = new HttpParams();
		params = params.append(RequestParameters.Offset, offset.toString());
		params = params.append(RequestParameters.Limit, limit.toString());
		if (type) {
			params = params.append(RequestParameters.Type, type);
		}
		if (search) {
			params = params.append(RequestParameters.Search, search);
		}
		if (ordering) {
			params = params.append(RequestParameters.Ordering, ordering);
		}
		const result$ = this.http.get<PaginationDto<AnimeDto>>('anime/anime/', { params });
		return result$.pipe(
			map((response: PaginationDto<AnimeDto>) => PaginationMapper.fromDto(response)),
			catchError((error: unknown): Observable<Pagination<Anime>> => {
				console.error(error);
				return throwError(() => error);
			}),
		);
	}
}
