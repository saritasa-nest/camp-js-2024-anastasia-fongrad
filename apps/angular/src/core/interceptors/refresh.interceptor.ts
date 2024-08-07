import { Injectable, inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpStatusCode } from '@js-camp/core/dtos/http-status-code.enum';

import { AuthorizationService } from '../services/authorization.service';
import { AppUrlConfig } from '../services/app-url-config.service';

/** 1. */
@Injectable()
export class RefreshInterceptor implements HttpInterceptor {

	private readonly authService = inject(AuthorizationService);

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
		return next.handle(req).pipe(
			catchError(error => {
				if (error.status !== HttpStatusCode.Unauthorized) {
					return throwError(() => error);
				}
				this.authService.refresh();
				return next.handle(req);
			})
		)
	}

	private isExcludedPath(url: string): boolean {
		return url.includes(this.appUrlConfig.paths.login) ||
			url.includes(this.appUrlConfig.paths.registration) ||
			url.includes(this.appUrlConfig.paths.tokenRefresh) ||
			url.includes(this.appUrlConfig.paths.tokenVerify);
	}
}
