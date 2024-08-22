import { useState } from 'react';
import { AuthorizationToken } from '@js-camp/core/models/authorization-token.model';

export const useAuthToken = () => {
	const tokenKey = 'authToken';
	const [authToken, setAuthToken] = useState<AuthorizationToken | null>(() => {
		const storedToken = localStorage.getItem(tokenKey);
		return storedToken ? JSON.parse(storedToken) : null;
	});

	const saveAuthToken = (token: AuthorizationToken) => {
		localStorage.setItem(tokenKey, JSON.stringify(token));
		setAuthToken(token);
	}

	const clearAuthToken = () => {
		localStorage.removeItem(tokenKey);
		setAuthToken(null);
	};

	return { authToken, saveAuthToken, clearAuthToken };
}
