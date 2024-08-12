import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, map } from 'rxjs';

import { AppRoutes } from '../utils/enums/app-routes.enum';
import { AuthorizationService } from '../services/authorization.service';

/** A guard that prevents access to pages for already authenticated users. */
@Injectable({
	providedIn: 'root',
})
export class AlreadyLoggedInGuard implements CanActivate {

	private readonly authService = inject(AuthorizationService);

	private readonly router = inject(Router);

	/** Determines whether the user can access a page. */
	public canActivate(): Observable<boolean> {
		return this.authService.isAuthorized().pipe(
			map(isAuthorized => {
				if (!isAuthorized) {
					return true;
				}
				this.router.navigate([AppRoutes.Home]);
				return false;
			}),
		);
	}
}
