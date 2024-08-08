import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, map, catchError, of } from 'rxjs';

import { AppRoutes } from '../utils/enums/app-routes.enum';
import { AuthorizationService } from '../services/authorization.service';

/** 1. */
@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {

	private readonly authService = inject(AuthorizationService);

	private readonly router = inject(Router);

	/** 1. */
	public canActivate(): Observable<boolean> {
		return this.authService.isAuthorized().pipe(
			map(isAuthorized => {
				if (isAuthorized) {
					return true;
				}
				this.router.navigate([AppRoutes.Login]);
				return false;
			}),
			catchError(() => {
				this.router.navigate([AppRoutes.Login]);
				return of(false);
			}),
		);
	}
}
