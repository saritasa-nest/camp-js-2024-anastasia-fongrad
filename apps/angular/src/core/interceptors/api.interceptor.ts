import { Observable } from 'rxjs';
import { environment } from '@js-camp/angular/environments/environment';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { HttpInterceptorFn } from '@angular/common/http';
import { AppConfig } from '../utils/app-config';

/**
 * 1.
 * @param req 1.
 * @param next 1.
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
