import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

/** 1. */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	private readonly authService: AuthService = inject(AuthService);

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