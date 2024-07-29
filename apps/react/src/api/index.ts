import axios from 'axios';

import { CONFIG } from './config';

/** HTTP client instance configured with the API base URL. */
export const http = axios.create({
	baseURL: CONFIG.apiUrl,
});
