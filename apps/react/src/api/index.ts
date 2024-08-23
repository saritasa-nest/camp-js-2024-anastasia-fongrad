import axios from 'axios';

import { AppUrlConfig } from '../utils/appUrlConfig';

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
		const authToken = localStorage.getItem('authToken');
		const parsedToken = authToken ? JSON.parse(authToken) : null;
		const newConfig = { ...config };
		if (parsedToken && !AppUrlConfig.isAccessibleToUnauthorized(config.url ?? '')) {
			newConfig.headers.Authorization = `Bearer ${parsedToken.accessToken}`;
		}
		return newConfig;
	},
	error => Promise.reject(error),
);
