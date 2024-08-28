import { Injectable } from '@angular/core';

/** Provides urls to work with the API. */
@Injectable({
	providedIn: 'root',
})
export class AppUrlConfig {

	/** An object tat contains app routes.  */
	public readonly paths = {
		animeList: 'anime/anime/',
		genresList: 'anime/genres/',
		studiosList: 'anime/studios/',
		login: 'auth/login/',
		registration: 'auth/register/',
		userProfile: 'users/profile/',
		tokenRefresh: 'auth/token/refresh/',
		tokenVerify: 'auth/token/verify/',
		getImageParams: 's3direct/get_params/',
	} as const;

	/**
	 * Checks if given url is accessible to unauthorized users.
	 * @param url Url to check.
	 */
	public isAccessibleToUnauthorized(url: string): boolean {
		return url.includes(this.paths.login) ||
			url.includes(this.paths.registration) ||
			url.includes(this.paths.tokenRefresh) ||
			url.endsWith(this.paths.animeList);
	}

	/**
	 * Gets a path for anime details.
	 * @param id Anime id.
	 */
	public getDetailsPath(id: number): string {
		return `${this.paths.animeList}${id}/`;
	}
}
