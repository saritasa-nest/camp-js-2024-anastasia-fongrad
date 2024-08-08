import { Injectable } from '@angular/core';
import { AuthorizationToken } from '@js-camp/core/models/authorization-token';
import { Observable, of, Subject } from 'rxjs';

/** 1. */
@Injectable({
	providedIn: 'root',
})
export class LocalStorageService {

	private readonly accessTokenKey = 'accessToken';

	private readonly refreshTokenKey = 'refreshToken';

	private tokenChangeSubject$ = new Subject<void>();

	/**
	 * 1.
	 * @param token 1.
	 */
	public saveToken(token: AuthorizationToken): void {
		localStorage.setItem(this.accessTokenKey, token.accessToken);
		localStorage.setItem(this.refreshTokenKey, token.refreshToken);
		this.tokenChangeSubject$.next();
	}

	/** 1. */
	public getAccessToken(): Observable<string | null> {
		const accessToken = localStorage.getItem(this.accessTokenKey);
		return of(accessToken);
	}

	/** 1. */
	public getRefreshToken(): Observable<string | null> {
		const refreshToken = localStorage.getItem(this.refreshTokenKey);
		return of(refreshToken);
	}

	/** 1. */
	public clearToken(): void {
		localStorage.removeItem(this.accessTokenKey);
		localStorage.removeItem(this.refreshTokenKey);
		this.tokenChangeSubject$.next();
	}

	/**
	 * 1.
	 * @returns 1.
	 */
	public onTokenChange(): Observable<void> {
		return this.tokenChangeSubject$.asObservable();
	}
}
