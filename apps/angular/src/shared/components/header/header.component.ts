import { Component, ChangeDetectionStrategy, inject, OnInit, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';
import { UserProfile } from '@js-camp/core/models/user-profile';
import { Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AppRoutes } from '@js-camp/angular/core/utils/enums/app-routes.enum';
import { UserProfileApiService } from '@js-camp/angular/core/services/user-profile-api.service';
import { AuthorizationService } from '@js-camp/angular/core/services/authorization.service';
import { LocalStorageService } from '@js-camp/angular/core/services/local-storage.service';

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
export class HeaderComponent implements OnInit {

	/** 1. */
	protected userProfile$: Observable<void | UserProfile>;

	/** 1. */
	protected readonly appRoutes = AppRoutes;

	private readonly authService = inject(AuthorizationService);

	private readonly userProfileService = inject(UserProfileApiService);

	private readonly localStorageService = inject(LocalStorageService);

	private readonly router = inject(Router);

	private readonly destroyRef = inject(DestroyRef);

	public constructor() {
		this.userProfile$ = this.userProfileService.getProfile();
	}

	/** 1. */
	public ngOnInit(): void {
		this.localStorageService.onTokenChange().pipe(
			takeUntilDestroyed(this.destroyRef),
		)
			.subscribe(() => {
				this.userProfile$ = this.userProfileService.getProfile();
			});
	}

	/** 1. */
	protected logout(): void {
		this.authService.logout();
		this.router.navigate([AppRoutes.Login]);
	}
}
