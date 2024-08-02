import { Injectable } from '@angular/core';
import { UserAccessToken } from '@js-camp/core/models/user-access-token';

/** 1. */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private readonly TOKEN_KEY = 'userAccessToken';

	/**
	 * 1.
	 * @param token 1.
	 */
	public saveToken(token: UserAccessToken): void {
		localStorage.setItem(this.TOKEN_KEY, JSON.stringify(token));
	}

	/**
	 * 1.
	 * @returns 1.
	 */
	public getToken(): UserAccessToken | null {
		const token = localStorage.getItem(this.TOKEN_KEY);
		return token ? JSON.parse(token) : null;
	}

	/** 1. */
	public clearToken(): void {
		console.log(1);
		localStorage.removeItem(this.TOKEN_KEY);
	}

	/** 1. */
	public isAuthenticated(): boolean {
		return !!this.getToken();
	}
}
