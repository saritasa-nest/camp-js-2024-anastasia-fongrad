import axios from 'axios';

import { CONFIG } from './config';

/** 1. */
export const http = axios.create({
	baseURL: CONFIG.apiUrl,
});
