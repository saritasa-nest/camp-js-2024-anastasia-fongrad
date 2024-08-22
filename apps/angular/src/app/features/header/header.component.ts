import { Component, ChangeDetectionStrategy, inject, OnInit, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';
import { UserProfile } from '@js-camp/core/models/user-profile.model';
import { Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AppRoutes } from '@js-camp/angular/core/utils/enums/app-routes.enum';
import { UserProfileService } from '@js-camp/angular/core/services/user-profile.service';
import { AuthorizationService } from '@js-camp/angular/core/services/authorization.service';
import { AuthorizationTokenService } from '@js-camp/angular/core/services/authorization-token.service';

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

	/** User profile data. */
	protected userProfile$: Observable<null | UserProfile>;

	/** Available app routes to navigate by. */
	protected readonly appRoutes = AppRoutes;

	private readonly authService = inject(AuthorizationService);

	private readonly userProfileService = inject(UserProfileService);

	private readonly tokenService = inject(AuthorizationTokenService);

	private readonly router = inject(Router);

	private readonly destroyRef = inject(DestroyRef);

	public constructor() {
		this.userProfile$ = this.userProfileService.getProfile();
	}

	/** Subscribes to the authentication token changes. */
	public ngOnInit(): void {
		this.tokenService.onTokenChange().pipe(
			takeUntilDestroyed(this.destroyRef),
		)
			.subscribe(() => {
				this.userProfile$ = this.userProfileService.getProfile();
			});
	}

	/** Performs user logout operation. */
	protected logout(): void {
		this.authService.logout();
		this.router.navigate([AppRoutes.Login]);
	}

	/**
	 * Gets a full route to the given page.
	 * @param route Basic app route.
	 */
	protected getFullRoute(route: AppRoutes): string {
		return `/${route}`;
	}
}
