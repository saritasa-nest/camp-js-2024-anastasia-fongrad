import { Injectable } from '@angular/core';

/** Provides urls to work with the API. */
@Injectable({
	providedIn: 'root',
})
export class AppUrlConfig {

	/** An object tat contains app routes.  */
	public readonly paths = {
		animeCatalog: 'anime/anime/',
		login: 'auth/login/',
		registration: 'auth/register/',
		userProfile: 'users/profile/',
		tokenRefresh: 'auth/token/refresh/',
		tokenVerify: 'auth/token/verify/',
	} as const;

	/**
	 * Checks if given url is accessible to unauthorized.
	 * @param url Url to check.
	 */
	public isAccessibleToUnauthorized(url: string): boolean {
		return url.includes(this.paths.login) ||
			url.includes(this.paths.registration) ||
			url.includes(this.paths.tokenRefresh) ||
			url.includes(this.paths.tokenVerify) ||
			url.includes(this.paths.animeCatalog);
	}
}
