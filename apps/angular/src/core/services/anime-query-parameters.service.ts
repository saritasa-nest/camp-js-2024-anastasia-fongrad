import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AnimeQueryParameters } from '@js-camp/core/models/anime-query-parameters.model';
import { AnimeQueryParametersMapper } from '@js-camp/core/mappers/anime-query-parameters.mapper';
import { AnimeType } from '@js-camp/core/models/enums/anime-type.enum';
import { AnimeSortParameter } from '@js-camp/core/models/anime-sort-parameter.model';
import { ObjectUtils } from '@js-camp/core/utils/object-utils';

const START_PAGE_INDEX = 0;

/** Works with anime query parameters. */
@Injectable({
	providedIn: 'root',
})
export class AnimeQueryParametersService {

	private readonly route = inject(ActivatedRoute);

	private readonly router = inject(Router);

	/** Returns an object with parsed query parameters. */
	public getQueryParameters(): Observable<AnimeQueryParameters> {
		return this.route.queryParams.pipe(
			map(params => {
				const offset = params['offset'] !== undefined ? +params['offset'] : undefined;
				const limit = +params['limit'] || undefined;
				return {
					offset,
					limit,

					// Disable eslint for a name of a dto parameter
					// eslint-disable-next-line @typescript-eslint/naming-convention
					type__in: params['type__in'],
					search: params['search'],
					ordering: params['ordering'],
				};
			}),
		).pipe(
			switchMap(parameters => of(AnimeQueryParametersMapper.fromDto(parameters))),
		);
	}

	/**
	 * Changes query parameters for the current url.
	 * @param animeQueryParameters Object with anime query parameters.
	 */
	private navigate(animeQueryParameters: Partial<AnimeQueryParameters>): void {
		const mappedQueryParams = ObjectUtils.removeEmptyFields(AnimeQueryParametersMapper.toDto(animeQueryParameters));
		this.router.navigate([], {
			queryParams: mappedQueryParams,
			queryParamsHandling: 'merge',
		});
	}

	/**
	 * Changes query parameters when anime pagination changes.
	 * @param limitPerPage Max quantity of items per page.
	 * @param pageIndex Current page index, starting from 0.
	 */
	public changePagination(limitPerPage: number, pageIndex: number): void {
		const params: Partial<AnimeQueryParameters> = {
			limitPerPage,
			pageIndex,
		};
		this.navigate(params);
	}

	/**
	 * Changes query parameters on filters change.
	 * @param animeTypes An object with selected anime types.
	 * @param searchQuery Search anime query.
	 */
	public changeFilters(animeTypes: AnimeType[] | undefined, searchQuery: string | undefined): void {
		const params: Partial<AnimeQueryParameters> = {
			animeTypes,
			searchQuery,
			pageIndex: START_PAGE_INDEX,
		};
		this.navigate(params);
	}

	/**
	 * Changes query parameters when sort event is triggered.
	 * @param animeSort Sort event from an anime table.
	 */
	public changeSortParameter(animeSort: AnimeSortParameter): void {
		const params: Partial<AnimeQueryParameters> = {
			animeSort,
		};
		this.navigate(params);
	}
}
