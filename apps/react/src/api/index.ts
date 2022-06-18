import axios, { AxiosInstance } from 'axios';

import { CONFIG } from './config';

export const http: AxiosInstance = axios.create({
  baseURL: CONFIG.apiUrl,
});
