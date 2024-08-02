import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '@js-camp/angular/core/services/auth-service';
import { Router } from '@angular/router';
import { UserLoginService } from '@js-camp/angular/core/services/user-login.service';
import { UserProfile } from '@js-camp/core/models/user-profile';
import { Observable } from 'rxjs';

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

	/** 1. */
	protected authService: AuthService = inject(AuthService);

	/** 1. */
	protected readonly userProfile$: Observable<UserProfile>;

	private userLoginService: UserLoginService = inject(UserLoginService);

	private router: Router = inject(Router);

	public constructor() {
		this.userProfile$ = this.userLoginService.getUserProfile();
	}

	protected logout(): void {
		this.authService.clearToken();
		this.router.navigate(['/login']);
	}

}
