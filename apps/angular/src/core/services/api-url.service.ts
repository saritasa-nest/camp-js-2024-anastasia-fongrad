import { inject, Injectable } from '@angular/core';

import { AppConfig } from '../utils/app-config';

/** Provides urls to work with the API. */
@Injectable({
	providedIn: 'root',
})
export class ApiUrlService {
	private readonly appConfig = inject(AppConfig);

	/** An url for the get anime list request. */
	public readonly animeListPath: string;

	public constructor() {
		this.animeListPath = `anime/anime/`;
	}
}
