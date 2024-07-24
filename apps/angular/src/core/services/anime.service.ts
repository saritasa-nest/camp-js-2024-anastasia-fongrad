import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { Anime } from '@js-camp/core/models/anime';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { AnimeDto } from '@js-camp/core/dtos/anime.dto';
import { Pagination } from '@js-camp/core/models/pagination.model';
import { PaginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { ActivatedRoute } from '@angular/router';

import { PaginationParameters } from '../utils/get-params.enum';

/** Connects to the API to manage anime data. */
@Injectable({
	providedIn: 'root',
})
export class AnimeApiService implements OnDestroy {

	/** Connects to the API to manage anime data. */
	public limitPerPage: number;

	/** Connects to the API to manage anime data. */
	public offset: number;

	/** Connects to the API to manage anime data. */
	public type: string | null;

	/** Connects to the API to manage anime data. */
	public search: string | null;

	private http: HttpClient;

	/** Connects to the API to manage anime data. */
	private routeSubscription: Subscription;

	public constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
		this.limitPerPage = 25;
		this.http = httpClient;
		this.offset = 0;
		this.type = null;
		this.search = null;

		this.routeSubscription = this.route.params.subscribe(params => {
			this.offset = +params['offset'];
			this.limitPerPage = +params['limit'];
		});
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
		params = params.append(PaginationParameters.Offset, this.offset.toString());
		params = params.append(PaginationParameters.Limit, this.limitPerPage.toString());
		if (this.type != null) {
			params = params.append(PaginationParameters.Type, this.type);
		}
		if (this.search != null) {
			params = params.append(PaginationParameters.Search, this.search);
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

	/** 1. */
	public ngOnDestroy(): void {
		if (this.routeSubscription) {
			this.routeSubscription.unsubscribe();
		}
	}
}
