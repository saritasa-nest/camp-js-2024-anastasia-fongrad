import { Injectable, inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LocalStorageService } from '../services/local-storage.service';
import { AppUrlConfig } from '../services/app-url-config.service';

/** 1. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	private readonly localStorageService = inject(LocalStorageService);

	private readonly appUrlConfig = inject(AppUrlConfig);

	/**
	 * 1.
	 * @param req 1.
	 * @param next 1.
	 * @returns 1.
	 */
	public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		if (this.isExcludedPath(req.url)) {
			return next.handle(req);
		}
		const token = this.localStorageService.getToken()?.accessToken;
		if (!token) {
			return next.handle(req);
		}
		const clonedRequest = req.clone({
			setHeaders: {

				// Disable eslint for a request header.
				// eslint-disable-next-line @typescript-eslint/naming-convention
				Authorization: `Bearer ${token}`,
			},
		});
		return next.handle(clonedRequest);
	}

	private isExcludedPath(url: string): boolean {
		return url.includes(this.appUrlConfig.paths.login) ||
			url.includes(this.appUrlConfig.paths.registration) ||
			url.includes(this.appUrlConfig.paths.tokenRefresh) ||
			url.includes(this.appUrlConfig.paths.tokenVerify);
	}
}
