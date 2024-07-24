import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
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

	/** Connects to the API to manage anime data. */
	public ordering: string | null;

	private http: HttpClient;

	private paginationDataSubject$: BehaviorSubject<Pagination<Anime>>;

	/** Connects to the API to manage anime data. */
	public paginationData$: Observable<Pagination<Anime>>;

	/** Connects to the API to manage anime data. */
	private routeSubscription: Subscription;

	public constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
		this.limitPerPage = 25;
		this.http = httpClient;
		this.offset = 0;
		this.type = null;
		this.search = null;
		this.ordering = null;
		this.paginationDataSubject$ = new BehaviorSubject<Pagination<Anime>>(
			new Pagination<Anime>({
				totalCount: 0,
				nextPage: null,
				previousPage: null,
				results: [],
			}),
		);
		this.paginationData$ = this.paginationDataSubject$.asObservable();
		this.routeSubscription = this.route.queryParams.pipe(
			switchMap(params => {
				this.offset = +params['offset'];
				this.limitPerPage = +params['limit'];
				this.type = params['type'];
				this.search = params['search'];
				this.ordering = params['ordering'];
				return this.getPagination();
			}),
		).subscribe(pagination => this.paginationDataSubject$.next(pagination));
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
		if (this.ordering != null) {
			params = params.append(PaginationParameters.Ordering, this.ordering);
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
