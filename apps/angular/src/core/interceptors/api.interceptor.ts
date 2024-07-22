import { HttpInterceptorFn } from '@angular/common/http';
import { AppConfig } from '../utils/app-config';

/**
 * Api interceptor that applies baseUrl and headers to the requests.
 * @param req The request object to be modified.
 * @param next The next interceptor in the chain.
 * @returns 1.
 */
export const apiInterceptor: HttpInterceptorFn = (req, next) => {
	const appConfig = new AppConfig;
	let apiReq = req;
	if(req.url.startsWith('anime')){
		apiReq = req.clone({
			url: `${appConfig.baseUrl}${req.url}`,
			setHeaders: {
				'Api-Key': appConfig.apiKey,
			},
		});
	}
	return next(apiReq);
}
