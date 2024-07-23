import { Injectable } from '@angular/core';
import { environment } from '@js-camp/angular/environments/environment';

/** Configures basic app parameters and works with the environment.  */
@Injectable({
	providedIn: 'root',
})
export class AppConfig {
	/** Basic URL for all of the API requests. */
	public readonly baseUrl = environment.baseUrl;

	/** Api key to to connect with the API. */
	public readonly apiKey = environment.apiKey;

}
