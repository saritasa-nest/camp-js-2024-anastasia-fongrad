import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LocalStorageService } from '@js-camp/angular/core/services/local-storage.service';
import { Router } from '@angular/router';
import { AuthorizationService } from '@js-camp/angular/core/services/user-login.service';
import { UserProfile } from '@js-camp/core/models/user-profile';
import { Observable, catchError, throwError, switchMap } from 'rxjs';
import { UserAccessToken } from '@js-camp/core/models/user-access-token';

/** Header component for the app. */
@Component({
	selector: 'camp-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		MatToolbarModule,
		MatMenuModule,
		MatButtonModule,
		CommonModule,
	],
})
export class HeaderComponent {

	private authService: LocalStorageService = inject(LocalStorageService);

	/** 1. */
	protected readonly userProfile$: Observable<UserProfile>;

	private userLoginService: AuthorizationService = inject(AuthorizationService);

	private router: Router = inject(Router);

	public constructor() {
		this.userProfile$ = this.userLoginService.getUserProfile().pipe(
			catchError(error => {
				if (error.status === 401) {
					const refreshToken = this.authService.getToken()?.refresh;
					console.log(refreshToken);
					if (refreshToken) {
						return this.userLoginService.refreshToken(refreshToken).pipe(
							switchMap((newToken: UserAccessToken) => {
								console.log(newToken);
								this.authService.saveToken(newToken);
								return this.userLoginService.getUserProfile()
							}),
							catchError(() => {
								this.authService.clearToken();
								this.router.navigate(['/login']);
								return throwError(() => error);
							}),
						);
					} else {
						this.authService.clearToken();
						this.router.navigate(['/login']);
					}
				}
				return throwError(() => error);
			})
		);
	}

	/** 1. */
	protected login(): void {
		this.router.navigate(['/login']);
	}

	/** 1. */
	protected logout(): void {
		this.authService.clearToken();
		this.router.navigate(['/login']);
	}

	/** 1. */
	protected isAuthorized(): boolean {
		return this.authService.isAuthenticated();
	}
}
