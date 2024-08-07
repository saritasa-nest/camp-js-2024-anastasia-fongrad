import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LocalStorageService } from '@js-camp/angular/core/services/local-storage.service';
import { RouterModule, Router } from '@angular/router';
import { UserProfile } from '@js-camp/core/models/user-profile';
import { Observable } from 'rxjs';
import { AppRoutes } from '@js-camp/angular/core/utils/enums/app-routes.enum';
import { UserProfileApiService } from '@js-camp/angular/core/services/user-profile-api.service';

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

	private authService = inject(LocalStorageService);

	/** 1. */
	protected readonly userProfile$: Observable<UserProfile>;

	/** 1. */
	protected readonly appRoutes = AppRoutes;

	private userProfileService = inject(UserProfileApiService);

	private router = inject(Router);

	public constructor() {
		this.userProfile$ = this.userProfileService.getProfile();
	}

	/** 1. */
	protected logout(): void {
		this.authService.clearToken();
		this.router.navigate([AppRoutes.Login]);
	}

	/** 1. */
	protected isAuthorized(): boolean {
		return this.authService.isAuthenticated();
	}
}
