import { Injectable } from '@angular/core';
import { environment } from '@js-camp/angular/environments/environment';

/** 1. */
@Injectable({
	providedIn: 'root',
})
export class AppConfig {
	/** 1. */
	public readonly baseUrl = 'https://api.camp-js.saritasa.rocks/api/v1/';

	/** 1. */
	public readonly apiKey = environment.apiKey;

}
