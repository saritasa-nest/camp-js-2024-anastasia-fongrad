import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LocalStorageService } from '@js-camp/angular/core/services/local-storage.service';
import { RouterModule, Router } from '@angular/router';
import { AuthorizationService } from '@js-camp/angular/core/services/authorization.service';
import { UserProfile } from '@js-camp/core/models/user-profile';
import { Observable } from 'rxjs';
import { AppRoutes } from '@js-camp/angular/core/utils/enums/app-routes.enum';

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
		RouterModule,
	],
})
export class HeaderComponent {

	private authService: LocalStorageService = inject(LocalStorageService);

	/** 1. */
	protected readonly userProfile$: Observable<UserProfile>;

	/** 1. */
	protected readonly appRoutes = AppRoutes;

	private userLoginService: AuthorizationService = inject(AuthorizationService);

	private router: Router = inject(Router);

	public constructor() {
		this.userProfile$ = this.userLoginService.getUserProfile();
	}

	/** 1. */
	protected logout(): void {
		this.authService.clearToken();
		this.router.navigate([AppRoutes.Authorization]);
	}

	/** 1. */
	protected isAuthorized(): boolean {
		return this.authService.isAuthenticated();
	}
}
