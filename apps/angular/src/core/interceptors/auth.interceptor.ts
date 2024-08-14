import { Injectable, inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

import { AuthorizationTokenService } from '../services/authorization-token.service';
import { AppUrlConfig } from '../services/app-url-config.service';

/** Adds an access token to the request headers. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	private readonly tokenService = inject(AuthorizationTokenService);

	private readonly appUrlConfig = inject(AppUrlConfig);

	/**
	 * Adds an access token to the request headers..
	 * @param req The request object to be modified.
	 * @param next The next interceptor in the chain.
	 * @returns The modified HttpEvent.
	 */
	public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		if (this.appUrlConfig.isAccessibleToUnauthorized(req.url)) {
			return next.handle(req);
		}
		return this.tokenService.getAccessToken().pipe(
			switchMap(accessToken => {
				if (!accessToken) {
					return next.handle(req);
				}
				const clonedRequest = req.clone({
					setHeaders: {

						// Disable eslint for a request header.
						// eslint-disable-next-line @typescript-eslint/naming-convention
						Authorization: `Bearer ${accessToken}`,
					},
				});
				return next.handle(clonedRequest);
			}),
		);
	}
}
