import { Component, inject } from '@angular/core';
import { HeaderComponent } from '@js-camp/angular/shared/components/header/header.component';
import { Router } from '@angular/router';
import { LocalStorageService } from '@js-camp/angular/core/services/local-storage.service';
import { UserAccessToken } from '@js-camp/core/models/user-access-token';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

import { RegistrationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

/** Main app component. */
@Component({
	selector: 'camp-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css'],
	standalone: true,
	imports: [
		HeaderComponent,
		RegistrationFormComponent,
		LoginFormComponent,
		CommonModule,
	],
})
export class AuthComponent {
	/** 1. */
	protected isLoginFormActive = true;

	private readonly dialog = inject(MatDialog);

	private router: Router = inject(Router);

	private authService: LocalStorageService = inject(LocalStorageService);

	/** 1. */
	protected showLoginForm(): void {
		this.isLoginFormActive = true;
	}

	/** 1. */
	protected showRegistrationForm(): void {
		this.isLoginFormActive = false;
	}

	/** 1. */
	protected onRegistrationSuccess(): void {
		this.dialog.open(RegistrationDialogComponent);
		this.showLoginForm();
	}

	/**
	 * 1.
	 * @param token 1.
	 */
	protected onLoginSuccess(token: UserAccessToken): void {
		this.authService.saveToken(token);
		this.router.navigate(['']);
	}
}
