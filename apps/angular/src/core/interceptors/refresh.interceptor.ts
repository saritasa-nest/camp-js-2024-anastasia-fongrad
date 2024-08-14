import { Injectable, inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, switchMap } from 'rxjs';
import { HttpStatusCode } from '@js-camp/core/dtos/enums/http-status-code.enum';

import { AuthorizationService } from '../services/authorization.service';
import { AppUrlConfig } from '../services/app-url-config.service';
import { AuthorizationTokenService } from '../services/authorization-token.service';

/** Refreshes an access token. */
@Injectable()
export class RefreshInterceptor implements HttpInterceptor {

	private readonly authService = inject(AuthorizationService);

	private readonly tokenService = inject(AuthorizationTokenService);

	private readonly appUrlConfig = inject(AppUrlConfig);

	/**
	 * Calls token refresh when access token gets expired.
	 * @param req The request object to be modified.
	 * @param next The next interceptor in the chain.
	 * @returns The modified HttpEvent.
	 */
	public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		if (this.appUrlConfig.isAccessibleToUnauthorized(req.url)) {
			return next.handle(req);
		}
		return next.handle(req).pipe(
			catchError((error: unknown) => {
				if (!(error instanceof HttpErrorResponse && error.status === HttpStatusCode.Unauthorized)) {
					return throwError(() => error);
				}
				return this.authService.refresh().pipe(
					switchMap(() => this.tokenService.getAccessToken()),
					switchMap(newToken => {
						const clonedRequest = req.clone({
							setHeaders: {

								// Disable eslint for a request header.
								// eslint-disable-next-line @typescript-eslint/naming-convention
								Authorization: `Bearer ${newToken}`,
							},
						});
						return next.handle(clonedRequest);
					}),
					catchError((refreshError: unknown) => throwError(() => refreshError)),
				);
			}),
		);
	}
}
