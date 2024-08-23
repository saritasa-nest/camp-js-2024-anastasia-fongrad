import { Injectable } from '@angular/core';
import { AuthorizationToken } from '@js-camp/core/models/authorization-token.model';
import { Observable, of, Subject } from 'rxjs';

/** Access token key in the local storage. */
const ACCESS_TOKEN_KEY = 'accessToken';

/** Refresh token key in the local storage. */
const REFRESH_TOKEN_KEY = 'refreshToken';

/** Works with user authorization tokens. */
@Injectable({
	providedIn: 'root',
})
export class AuthorizationTokenService {

	private readonly tokenChangeSubject$ = new Subject<void>();

	/**
	 * Saves information about an authorization token.
	 * @param token User authorization token.
	 */
	public saveToken(token: AuthorizationToken): void {
		localStorage.setItem(ACCESS_TOKEN_KEY, token.accessToken);
		localStorage.setItem(REFRESH_TOKEN_KEY, token.refreshToken);
		this.tokenChangeSubject$.next();
	}

	/** Gets an access authorization token. */
	public getAccessToken(): Observable<string | null> {
		const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
		return of(accessToken);
	}

	/** Gets a refresh authorization token. */
	public getRefreshToken(): Observable<string | null> {
		const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
		return of(refreshToken);
	}

	/** Clears information about an authorization token. */
	public clearToken(): void {
		localStorage.removeItem(ACCESS_TOKEN_KEY);
		localStorage.removeItem(REFRESH_TOKEN_KEY);
		this.tokenChangeSubject$.next();
	}

	/** Returns an empty observable when token value changes. */
	public onTokenChange(): Observable<void> {
		return this.tokenChangeSubject$.asObservable();
	}
}
