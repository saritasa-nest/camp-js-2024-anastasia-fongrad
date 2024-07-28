import { inject, Injectable } from '@angular/core';

import { AppConfig } from '../utils/app-config';

/** 1. */
@Injectable({
	providedIn: 'root',
})
export class ApiUrlService {
	private readonly appConfig = inject(AppConfig);

	/** 1. */
	public readonly animeListPath: string;

	public constructor() {
		this.animeListPath = `${this.appConfig.baseUrl}/anime/anime/`;
	}
}
