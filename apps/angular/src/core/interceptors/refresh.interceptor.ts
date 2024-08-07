import { Injectable, inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, switchMap } from 'rxjs';
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
			switchMap(() => next.handle(req)),
			catchError((error: unknown) => {
				if (error instanceof HttpErrorResponse && error.status === HttpStatusCode.Unauthorized) {
					return this.authService.refresh().pipe(
						switchMap(() => next.handle(req)),
						catchError((refreshError: unknown) => throwError(() => refreshError)),
					);
				}
				return throwError(() => error);
			}),
		);
	}

	private isExcludedPath(url: string): boolean {
		return url.includes(this.appUrlConfig.paths.login) ||
			url.includes(this.appUrlConfig.paths.registration) ||
			url.includes(this.appUrlConfig.paths.tokenRefresh) ||
			url.includes(this.appUrlConfig.paths.tokenVerify) ||
			url.includes(this.appUrlConfig.paths.animeCatalog);
	}
}
