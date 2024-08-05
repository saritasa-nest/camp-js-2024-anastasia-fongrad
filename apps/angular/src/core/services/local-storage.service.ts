import { Injectable } from '@angular/core';
import { UserAccessToken } from '@js-camp/core/models/user-access-token';

/** 1. */
@Injectable({
	providedIn: 'root',
})
export class LocalStorageService {

	private readonly tokenKey = 'userAccessToken';

	/**
	 * 1.
	 * @param token 1.
	 */
	public saveToken(token: UserAccessToken): void {
		localStorage.setItem(this.tokenKey, JSON.stringify(token));
	}

	/**
	 * 1.
	 * @returns 1.
	 */
	public getToken(): UserAccessToken | null {
		const token = localStorage.getItem(this.tokenKey);
		return token ? JSON.parse(token) : null;
	}

	/** 1. */
	public clearToken(): void {
		localStorage.removeItem(this.tokenKey);
	}

	/** 1. */
	public isAuthenticated(): boolean {
		return !!this.getToken();
	}
}
