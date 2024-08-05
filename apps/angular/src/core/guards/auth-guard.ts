import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { LocalStorageService } from '../services/local-storage.service';

/** 1. */
@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {

	private readonly authService: LocalStorageService = inject(LocalStorageService);

	private readonly router: Router = inject(Router);

	/** 1. */
	public canActivate(): boolean {
		if (this.authService.isAuthenticated()) {
			return true;
		}
		this.router.navigate(['/login']);
		return false;
	}
}
