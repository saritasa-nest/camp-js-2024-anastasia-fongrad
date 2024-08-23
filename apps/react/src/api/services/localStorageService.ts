import { AuthorizationToken } from '@js-camp/core/models/authorization-token.model';

const tokenKey = 'authToken';

export namespace AuthTokenService {

	/** 1. */
	export function getAuthToken(): AuthorizationToken | null {
		const storedToken = localStorage.getItem(tokenKey);
		return storedToken ? JSON.parse(storedToken) : null;
	}

	/**
	 * 1.
	 * @param token 1.
	 */
	export function saveAuthToken(token: AuthorizationToken): void {
		localStorage.setItem(tokenKey, JSON.stringify(token));
	}

	/** 1. */
	export function removeAuthToken(): void {
		localStorage.removeItem(tokenKey);
	}
}
