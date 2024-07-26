import { Injectable } from "@angular/core";
import { AnimeQueryParameters } from "@js-camp/core/models/anime-parameters.model";

/** 1. */
export const DEFAULT_PAGE_SIZE = 5;

/** 1. */
export const START_PAGE_INDEX = 0;


@Injectable({
	providedIn: 'root',
})
export class AnimeQueryParametersService {
	// private readonly queryParameters: AnimeQueryParameters;

}
