export namespace AppUrlConfig {

	/** 1. */
	export const paths = {
		animeList: 'anime/anime/list-cursor/',
		genresList: 'anime/genres/',
		login: 'auth/login/',
		registration: 'auth/register/',
		userProfile: 'users/profile/',
		tokenRefresh: 'auth/token/refresh/',
		tokenVerify: 'auth/token/verify/',
	} as const;

	/**
	 * 1.
	 * @param url 1.
	 */
	export function isAccessibleToUnauthorized(url: string): boolean {
		return url.includes(paths.login) ||
			url.includes(paths.registration) ||
			url.includes(paths.tokenRefresh) ||
			url.endsWith(paths.animeList) ||
			url.endsWith(paths.genresList);
	}
}
