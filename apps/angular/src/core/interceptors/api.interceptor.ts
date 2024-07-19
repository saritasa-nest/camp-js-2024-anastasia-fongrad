import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@js-camp/angular/environments/environment';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

/** 1. */
@Injectable()
export class ApiInterceptor implements HttpInterceptor {
	private readonly rootUrl = 'https://api.camp-js.saritasa.rocks/api/v1/';

	/**
	 * 1.
	 * @param req 1.
	 * @param next 1.
	 * @returns 1.
	 */
	public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const apiReq = req.clone({
			url: `${this.rootUrl}${req.url}`,
			setHeaders: {
				'Api-Key': environment.apiKey,
			},
		});
		return next.handle(apiReq);
	}
}
