import { AuthorizationToken } from '@js-camp/core/models/authorization-token.model';

const TOKEN_KEY = 'authToken';

export namespace AuthTokenService {

	/** Gets an authentication token. */
	export function getAuthToken(): AuthorizationToken | null {
		const storedToken = localStorage.getItem(TOKEN_KEY);
		return storedToken ? JSON.parse(storedToken) : null;
	}

	/**
	 * Saves an authentication token.
	 * @param token 1.
	 */
	export function saveAuthToken(token: AuthorizationToken): void {
		localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
	}

	/** Clears an authentication token. */
	export function removeAuthToken(): void {
		localStorage.removeItem(TOKEN_KEY);
	}
}
