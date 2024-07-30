import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AnimeQueryParameters } from '@js-camp/core/models/anime-parameters.model';
import { AnimeQueryParametersMapper } from '@js-camp/core/mappers/anime-parameters.mapper';
import { AnimeQueryParametersDto } from '@js-camp/core/dtos/anime-parameters.dto';
import { PageEvent } from '@angular/material/paginator';
import { AnimeType } from '@js-camp/core/models/enums/model-type.enum';
import { SortParameter } from '@js-camp/core/models/sort.model';

const START_PAGE_INDEX = 0;

const DEFAULT_PAGE_SIZE = 5;

/** Works with anime query parameters. */
@Injectable({
	providedIn: 'root',
})
export class AnimeQueryParametersService {

	private readonly route = inject(ActivatedRoute);

	private readonly router = inject(Router);

	/** Anime query parameters. */
	protected animeParameters: AnimeQueryParameters = {
		offset: START_PAGE_INDEX,
		limitPerPage: DEFAULT_PAGE_SIZE,
		searchQuery: '',
		animeType: [],
		animeOrdering: [],
	};

	/** Returns an object with row query parameters. */
	public getQueryParameters(): Observable<AnimeQueryParametersDto> {
		return this.route.queryParams.pipe(
			map(params => {
				if (Object.keys(params).length === 0) {
					this.navigate(this.animeParameters);
				}
				let parameters: AnimeQueryParametersDto = {
					offset: +params['offset'] || START_PAGE_INDEX,
					limit: +params['limit'] || DEFAULT_PAGE_SIZE,
				};
				if (params['search']) {
					parameters = { ...parameters, search: params['search'] };
				}
				if (params['type__in']) {
					// Disable eslint for a name of a dto parameter
					// eslint-disable-next-line @typescript-eslint/naming-convention
					parameters = { ...parameters, type__in: params['type__in'] };
				}
				if (params['ordering']) {
					parameters = { ...parameters, ordering: params['ordering'] };
				}
				return parameters;
			}),
		);
	}

	/** Returns an object with parsed query parameters. */
	public getParsedQueryParameters(): Observable<AnimeQueryParameters> {
		return this.getQueryParameters().pipe(
			switchMap(parameters => of(AnimeQueryParametersMapper.fromDto(parameters))),
		);
	}

	/**
	 * Changes query parameters for the current url.
	 * @param animeQueryParameters Object with anime query parameters.
	 */
	private navigate(animeQueryParameters: AnimeQueryParameters): void {
		const queryParams = { ...AnimeQueryParametersMapper.toDto(animeQueryParameters) };
		this.router.navigate([], {
			queryParams,
		});
	}

	/**
	 * Changes query parameters when pagination event occurs.
	 * @param event Page change event.
	 */
	public onPageChange(event: PageEvent): void {
		const offset = event.pageIndex * event.pageSize;
		const limitPerPage = event.pageSize;
		this.animeParameters = { ...this.animeParameters, offset, limitPerPage };
		this.navigate(this.animeParameters);
	}

	/**
	 * Changes query parameters when new type gets selected.
	 * @param animeType An object with selected anime types.
	 */
	public onSelectType(animeType: AnimeType[]): void {
		const offset = START_PAGE_INDEX;
		this.animeParameters = { ...this.animeParameters, offset, animeType };
		this.navigate(this.animeParameters);
	}

	/**
	 * Changes query parameters when search event occurs.
	 * @param searchQuery Search anime query.
	 */
	public onSearch(searchQuery: string): void {
		const offset = START_PAGE_INDEX;
		this.animeParameters = { ...this.animeParameters, offset, searchQuery };
		this.navigate(this.animeParameters);
	}

	/**
	 * Changes query parameters when sort event is triggered.
	 * @param event Sort event from an anime table.
	 */
	public onSortChange(event: SortParameter): void {
		const { animeOrdering } = this.animeParameters;
		const existingParameterIndex = this.animeParameters.animeOrdering.findIndex(
			p => p.parameterName === event.parameterName,
		);
		if (existingParameterIndex !== -1) {
			this.animeParameters.animeOrdering.splice(existingParameterIndex, 1);
		}
		if (event.direction !== '') {
			animeOrdering.push(event);
		}
		this.animeParameters = { ...this.animeParameters, animeOrdering };
		this.navigate(this.animeParameters);
	}
}
