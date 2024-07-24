import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { Anime } from '@js-camp/core/models/anime';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { AnimeDto } from '@js-camp/core/dtos/anime.dto';
import { Pagination } from '@js-camp/core/models/pagination.model';
import { PaginationMapper } from '@js-camp/core/mappers/pagination.mapper';

/** Connects to the API to manage anime data. */
@Injectable({
	providedIn: 'root',
})
export class AnimeApiService {

	/** Connects to the API to manage anime data. */
	public limitPerPage: number;

	/** Connects to the API to manage anime data. */
	public offset: number;

	private http: HttpClient;

	public constructor(private httpClient: HttpClient) {
		this.limitPerPage = 25;
		this.http = httpClient;
		this.offset = 0;
	}

	/** Get anime list. */
	public getAnimeList(): Observable<Anime[]> {
		const result$ = this.http.get<PaginationDto<AnimeDto>>('anime/anime/');
		return result$.pipe(
			map((response: PaginationDto<AnimeDto>) => {
				if ('results' in response) {
					return response.results.map(dto => AnimeMapper.fromDto(dto));
				}
				console.error(response);
				return [];
			}),
		);
	}

	/** Get anime list. */
	public getPagination(): Observable<Pagination<Anime>> {
		let params = new HttpParams();
		params = params.append('offset', this.offset.toString());
		params = params.append('limit', this.limitPerPage.toString());
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
