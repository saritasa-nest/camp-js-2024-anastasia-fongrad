import axios from 'axios';

import { AppUrlConfig } from '../utils/appUrlConfig';

import { AuthTokenService } from './services/localStorageService';
import { AuthService } from './services/authService';
import { CONFIG } from './config';

/** HTTP client instance configured with the API base URL. */
export const http = axios.create({
	baseURL: CONFIG.apiUrl,
	headers: {
		'Api-Key': CONFIG.apiKey,
	},
});

http.interceptors.request.use(
	config => {
		const authToken = AuthTokenService.getAuthToken();
		const newConfig = { ...config };
		if (authToken && !AppUrlConfig.isAccessibleToUnauthorized(config.url ?? '')) {
			newConfig.headers.Authorization = `Bearer ${authToken.accessToken}`;
		}
		return newConfig;
	},
	error => Promise.reject(error),
);

http.interceptors.response.use(
	response => response,
	async error => {
		const originalRequest = error.config;
		if (error.response.status === 401) {
			originalRequest._retry = true;
			try {
				const refreshToken = AuthTokenService.getAuthToken()?.refreshToken;

				if (refreshToken) {
					const tokens = await AuthService.refresh(refreshToken);
					AuthTokenService.saveAuthToken(tokens);
					http.defaults.headers.Authorization = `Bearer ${tokens.accessToken}`;
				}
				return http(originalRequest);
			} catch (refreshError) {
				console.error(refreshError);
				AuthTokenService.removeAuthToken();
				return Promise.reject(refreshError);
			}
		}
		return Promise.reject(error);
	},
);
