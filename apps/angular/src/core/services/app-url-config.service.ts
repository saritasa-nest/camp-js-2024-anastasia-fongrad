import { Injectable } from '@angular/core';

/** Provides urls to work with the API. */
@Injectable({
	providedIn: 'root',
})
export class AppUrlConfig {

	/** An object tat contains app routes.  */
	public readonly paths = {
		animeCatalog: 'anime/anime/',
	} as const;
}
