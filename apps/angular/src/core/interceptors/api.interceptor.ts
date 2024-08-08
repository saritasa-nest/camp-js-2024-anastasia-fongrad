import { Observable } from 'rxjs';
import { HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpEvent } from '@angular/common/http';

import { AppConfig } from '../utils/app-config';

/**
 * Api interceptor that applies baseUrl and headers to the requests.
 * @param req The request object to be modified.
 * @param next The next interceptor in the chain.
 * @returns The modified HttpEvent.
 */
export const apiInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
	const appConfig = new AppConfig();
	let apiReq = req;
	apiReq = req.clone({
		url: `${appConfig.baseUrl}${req.url}`,
		setHeaders: {
			// We need to send api-key to the server in this format
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'Api-Key': appConfig.apiKey,
		},
	});
	return next(apiReq);
};
