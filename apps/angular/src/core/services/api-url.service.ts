import { Injectable } from '@angular/core';

/** Provides urls to work with the API. */
@Injectable({
	providedIn: 'root',
})
export class ApiUrlService {

	/** An object tat contains app routes.  */
	public readonly paths = {
		animeCatalog: 'anime/anime/',
		login: 'auth/login/',
		registration: 'auth/register/',
		userProfile: 'users/profile/',
		tokenRefresh: 'token/refresh/',
		tokenVerify: 'token/verify/',
	} as const;
}
