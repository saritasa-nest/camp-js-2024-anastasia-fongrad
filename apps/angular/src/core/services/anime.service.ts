import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Anime } from '@js-camp/core/models/anime';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { AnimeDto } from '@js-camp/core/dtos/anime.dto';
import { Pagination } from '@js-camp/core/models/pagination.model';
import { PaginationMapper } from '@js-camp/core/mappers/pagination.mapper';

import { PaginationParameters } from '../utils/get-params.enum';

/** Connects to the API to manage anime data. */
@Injectable({
	providedIn: 'root',
})
export class AnimeApiService {

	private readonly http: HttpClient = inject(HttpClient);

	/**
	 * 1.
	 * @param offset 1.
	 * @param limit 1.
	 * @param type 1.
	 * @param search 1.
	 * @param ordering 1.
	 * @returns 1.
	 */
	public getPagination(offset: number, limit: number, type?: string, search?: string, ordering?: string): Observable<Pagination<Anime>> {
		let params = new HttpParams();
		params = params.append(PaginationParameters.Offset, offset.toString());
		params = params.append(PaginationParameters.Limit, limit.toString());
		if (type != null) {
			params = params.append(PaginationParameters.Type, type);
		}
		if (search != null) {
			params = params.append(PaginationParameters.Search, search);
		}
		if (ordering != null) {
			params = params.append(PaginationParameters.Ordering, ordering);
		}
		const result$ = this.http.get<PaginationDto<AnimeDto>>('anime/anime/', { params });
		return result$.pipe(
			map((response: PaginationDto<AnimeDto>) => {
				if ('results' in response) {
					return PaginationMapper.fromDto(response);
				}
				console.error(response);
				return new Pagination<Anime>({
					totalCount: 0,
					nextPage: null,
					previousPage: null,
					results: [],
				});
			}),
		);
	}
}
