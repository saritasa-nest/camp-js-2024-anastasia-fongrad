import { Injectable, inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserAccessToken } from '@js-camp/core/models/user-access-token';
import { HttpStatusCode } from '@js-camp/core/dtos/http-status-code.enum';

import { AppRoutes } from '../utils/enums/app-routes.enum';
import { AuthorizationService } from '../services/authorization.service';
import { LocalStorageService } from '../services/local-storage.service';
import { ApiUrlService } from '../services/api-url.service';

/** 1. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	private readonly localStorageService: LocalStorageService = inject(LocalStorageService);

	private readonly authService: AuthorizationService = inject(AuthorizationService);

	private readonly router: Router = inject(Router);

	private readonly apiUrlService: ApiUrlService = inject(ApiUrlService);

	/**
	 * 1.
	 * @param req 1.
	 * @param next 1.
	 * @returns 1.
	 */
	public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		console.log(1);
		if (this.isExcludedPath(req.url)) {
			return next.handle(req);
		}
		const token = this.localStorageService.getToken()?.access;
			const clonedRequest = token ? req.clone({
			setHeaders: {
				Authorization: `Bearer ${token}`,
			},
		}) : req;
		return next.handle(clonedRequest).pipe(
			catchError(error => {
				if (error.status === HttpStatusCode.Unauthorized) {
					const refreshToken = this.localStorageService.getToken()?.refresh;
					if (refreshToken) {
						return this.authService.refreshToken(refreshToken).pipe(
							switchMap((newToken: UserAccessToken) => {
								this.localStorageService.saveToken(newToken);
								const clonedRequest = req.clone({
									setHeaders: {
										Authorization: `Bearer ${newToken.access}`,
									},
								});
								return next.handle(clonedRequest);
							}),
							catchError(() => {
								this.localStorageService.clearToken();
								this.router.navigate([AppRoutes.Authorization]);
								return throwError(() => error);
							}),
						);
					} else {
						this.localStorageService.clearToken();
						this.router.navigate([AppRoutes.Authorization]);
					}
				}
				return throwError(() => error);
			}),
		);
	}

	private isExcludedPath(url: string): boolean {
		return url.includes(this.apiUrlService.paths.login) ||
			url.includes(this.apiUrlService.paths.registration) ||
			url.includes(this.apiUrlService.paths.tokenRefresh) ||
			url.includes(this.apiUrlService.paths.tokenVerify);
	}
}
