export namespace AppUrlConfig {

	/** Api url paths. */
	export const paths = {
		animeList: 'anime/list-cursor/',
		genresList: 'genres/',
		login: 'auth/login/',
		registration: 'auth/register/',
		userProfile: 'users/profile/',
		tokenRefresh: 'auth/token/refresh/',
		tokenVerify: 'auth/token/verify/',
	} as const;

	/**
	 * Checks if a path is accessible to unauthorized users.
	 * @param url Url path to check.
	 */
	export function isAccessibleToUnauthorized(url: string): boolean {
		return url.includes(paths.login) ||
			url.includes(paths.registration) ||
			url.includes(paths.tokenRefresh) ||
			url.endsWith(paths.animeList) ||
			url.endsWith(paths.genresList);
	}
}
