import { Injectable } from '@angular/core';
import { AuthorizationToken } from '@js-camp/core/models/authorization-token.model';
import { Observable, of, Subject } from 'rxjs';

/** Works with user authorization tokens. */
@Injectable({
	providedIn: 'root',
})
export class AuthorizationTokenService {

	private readonly accessTokenKey = 'accessToken';

	private readonly refreshTokenKey = 'refreshToken';

	private readonly tokenChangeSubject$ = new Subject<void>();

	/**
	 * Saves information about an authorization token.
	 * @param token User authorization token.
	 */
	public saveToken(token: AuthorizationToken): void {
		localStorage.setItem(this.accessTokenKey, token.accessToken);
		localStorage.setItem(this.refreshTokenKey, token.refreshToken);
		this.tokenChangeSubject$.next();
	}

	/** Gets an access authorization token. */
	public getAccessToken(): Observable<string | null> {
		const accessToken = localStorage.getItem(this.accessTokenKey);
		return of(accessToken);
	}

	/** Gets a refresh authorization token. */
	public getRefreshToken(): Observable<string | null> {
		const refreshToken = localStorage.getItem(this.refreshTokenKey);
		return of(refreshToken);
	}

	/** Clears information about an authorization token. */
	public clearToken(): void {
		localStorage.removeItem(this.accessTokenKey);
		localStorage.removeItem(this.refreshTokenKey);
		this.tokenChangeSubject$.next();
	}

	/** Returns an empty observable when token value changes. */
	public onTokenChange(): Observable<void> {
		return this.tokenChangeSubject$.asObservable();
	}
}
