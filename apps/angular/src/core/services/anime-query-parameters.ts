import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Pagination } from '@js-camp/core/models/pagination.model';
import { Anime } from '@js-camp/core/models/anime';
import { AnimeQueryParameters } from '@js-camp/core/models/anime-parameters.model';
import { AnimeQueryParametersMapper } from '@js-camp/core/mappers/anime-parameters.mapper';
import { AnimeQueryParametersDto } from '@js-camp/core/dtos/anime-parameters.dto';

import { AnimeApiService } from './anime-api.service';

/** 1. */
@Injectable({
	providedIn: 'root',
})
export class AnimeQueryParametersService {

	private readonly startPageIndex = 0;

	private readonly defaultPageSize = 5;

	private readonly route = inject(ActivatedRoute);

	private readonly router = inject(Router);

	private readonly animeApiService = inject(AnimeApiService);

	private parseQueryParameters(): Observable<Partial<AnimeQueryParametersDto>> {
		return this.route.queryParams.pipe(
			map(params => {
				if (Object.keys(params).length === 0) {
					this.navigate(new AnimeQueryParameters({}));
				}
				const parameters: Partial<AnimeQueryParametersDto> = {
					offset: +params['offset'] || this.startPageIndex,
					limit: +params['limit'] || this.defaultPageSize,
				};
				if (params['search']) {
					parameters.search = params['search'];
				}
				if (params['type__in']) {
					parameters.type__in = params['type__in'];
				}
				if (params['ordering']) {
					parameters.ordering = params['ordering'];
				}
				return parameters;
			}),
		);
	}

	/** Requests paginated anime data when query parameters change. */
	public getPaginatedAnime(): Observable<Pagination<Anime>> {
		return this.parseQueryParameters().pipe(
			switchMap(parameters => this.animeApiService.getAll(parameters)),
		);
	}

	/** Returns an object with parsed query parameters. */
	public getQueryParameters(): Observable<AnimeQueryParameters> {
		return this.parseQueryParameters().pipe(
			switchMap(parameters => of(AnimeQueryParametersMapper.fromDto(parameters))),
		);
	}

	/**
	 * Changes query parameters for the current url.
	 * @param animeQueryParameters Object with anime query parameters.
	 */
	public navigate(animeQueryParameters: AnimeQueryParameters): void {
		const queryParams = { ...AnimeQueryParametersMapper.toDto(animeQueryParameters) };
		this.router.navigate([], {
			queryParams,
		});
	}
}
