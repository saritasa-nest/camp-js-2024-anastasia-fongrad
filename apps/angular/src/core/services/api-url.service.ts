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

	/** 1. */
	public readonly loginPath: string;

	/** 1. */
	public readonly registrationPath: string;

	public constructor() {
		this.animeListPath = 'anime/anime/';
		this.loginPath = 'auth/login/';
		this.registrationPath = 'auth/register/';
	}
}
