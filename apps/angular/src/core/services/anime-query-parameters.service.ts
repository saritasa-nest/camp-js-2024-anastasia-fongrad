import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AnimeQueryParameters } from '@js-camp/core/models/anime-query-parameters.model';
import { AnimeQueryParametersMapper } from '@js-camp/core/mappers/anime-query-parameters.mapper';
import { AnimeQueryParametersDto } from '@js-camp/core/dtos/anime-query-parameters.dto';
import { AnimeType } from '@js-camp/core/models/enums/model-type.enum';
import { SortParameter } from '@js-camp/core/models/sort.model';

import { START_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '../utils/anime-constants';

/** Works with anime query parameters. */
@Injectable({
	providedIn: 'root',
})
export class AnimeQueryParametersService {

	private readonly route = inject(ActivatedRoute);

	private readonly router = inject(Router);

	/** Returns an object with row query parameters. */
	public getQueryParameters(): Observable<Partial<AnimeQueryParametersDto>> {
		return this.route.queryParams.pipe(
			map(params => {
				if (Object.keys(params).length === 0) {
					this.changePagination(DEFAULT_PAGE_SIZE, START_PAGE_INDEX);
				}
				const offset = params['offset'] !== undefined ? +params['offset'] : undefined;
				const limit = +params['limit'] || undefined;
				const search = params['search'] || undefined;
				const types = params['type__in'] || undefined;
				const ordering = params['ordering'] || undefined;
				return {
					offset,
					limit,

					// Disable eslint for a name of a dto parameter
					// eslint-disable-next-line @typescript-eslint/naming-convention
					type__in: types,
					search,
					ordering,
				};
			}),
		);
	}

	/** Returns an object with parsed query parameters. */
	public getParsedQueryParameters(): Observable<Partial<AnimeQueryParameters>> {
		return this.getQueryParameters().pipe(
			switchMap(parameters => of(AnimeQueryParametersMapper.fromDto(parameters))),
		);
	}

	/**
	 * Changes query parameters for the current url.
	 * @param animeQueryParameters Object with anime query parameters.
	 */
	private navigate(animeQueryParameters: Partial<AnimeQueryParameters>): void {
		const queryParams = AnimeQueryParametersMapper.toDto(animeQueryParameters);
		const newParameters = Object.fromEntries(
			Object.entries(queryParams).filter(([_key, value]) => value !== undefined),
		);

		this.router.navigate([], {
			queryParams: newParameters,
			queryParamsHandling: 'merge',
		});
	}

	/**
	 * Changes query parameters when anime pagination changes.
	 * @param limitPerPage Max quantity of items per page.
	 * @param pageNumber Current page number, starting from 0.
	 */
	public changePagination(limitPerPage: number, pageNumber: number): void {
		const params: Partial<AnimeQueryParameters> = {
			limitPerPage,
			pageNumber,
		};
		this.navigate(params);
	}

	/**
	 * Changes query parameters when new type gets selected.
	 * @param animeTypes An object with selected anime types.
	 */
	public changeTypesParameter(animeTypes: AnimeType[]): void {
		const params: Partial<AnimeQueryParameters> = {
			animeTypes,
			pageNumber: START_PAGE_INDEX,
		};
		this.navigate(params);
	}

	/**
	 * Changes query parameters when search event occurs.
	 * @param searchQuery Search anime query.
	 */
	public changeSearchParameter(searchQuery: string): void {
		const params: Partial<AnimeQueryParameters> = {
			searchQuery,
			pageNumber: START_PAGE_INDEX,
		};
		this.navigate(params);
	}

	/**
	 * Changes query parameters when sort event is triggered.
	 * @param animeSort Sort event from an anime table.
	 */
	public changeSortParameter(animeSort: SortParameter): void {
		const params: Partial<AnimeQueryParameters> = {
			animeSort,
		};
		this.navigate(params);
	}
}
