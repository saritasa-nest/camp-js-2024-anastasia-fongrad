import { Injectable, inject } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeApiService } from "./anime-api.service";
import { switchMap } from 'rxjs/operators';
import { AnimeQueryParameters } from "@js-camp/core/models/anime-parameters.model";

/** 1. */
export const DEFAULT_PAGE_SIZE = 5;

/** 1. */
export const START_PAGE_INDEX = 0;


@Injectable({
	providedIn: 'root',
})
export class AnimeQueryParametersService {
	private readonly route = inject(ActivatedRoute);
	private router = inject(Router);
	private readonly animeApiService = inject(AnimeApiService);

	//** 1. */
	handleRouteParameters() {
		return this.route.queryParams.pipe(
		  	switchMap(params => {
				if (Object.keys(params).length === 0) {
					this.navigate({
						offset: START_PAGE_INDEX,
						limit: DEFAULT_PAGE_SIZE,
					});
				}
				const offset = +params['offset'] || START_PAGE_INDEX;
				const ordering = params['ordering'] || null;
				const searchQuery = params['search'] || null;
				const selectedType = params['type'] || null;
				const pageSize = +params['limit'] || DEFAULT_PAGE_SIZE;
				return this.animeApiService.getAll(
					offset,
					pageSize,
					selectedType,
					searchQuery,
					ordering,
				);
			}),
		);
	}

	/**
	 * 1.
	 * @param queryParams 1.
	 */
	navigate(queryParams: object): void {
		this.router.navigate([], {
			queryParams,
			queryParamsHandling: 'merge',
		});
	}
}
