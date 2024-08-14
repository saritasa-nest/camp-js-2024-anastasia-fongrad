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
	 * 1.
	 * @param url 1.
	 * @returns 1.
	 */
	public isAccessibleToUnauthorized(url: string): boolean {
		return url.includes(this.paths.login) ||
			url.includes(this.paths.registration) ||
			url.includes(this.paths.tokenRefresh) ||
			url.includes(this.paths.tokenVerify) ||
			url.includes(this.paths.animeCatalog);
	}
}
