import { Component, inject } from '@angular/core';
import { HeaderComponent } from '@js-camp/angular/shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { AppRoutes } from '@js-camp/angular/core/utils/enums/app-routes.enum';
import { Router, RouterModule } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';

/** Main app component. */
@Component({
	selector: 'camp-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	standalone: true,
	imports: [
		HeaderComponent,
		LoginFormComponent,
		RouterModule,
		CommonModule,
	],
})
export class LoginComponent {

	/** 1. */
	protected readonly appRoutes = AppRoutes;

	private readonly router = inject(Router);

	/** 1. */
	protected onLoginSuccess(): void {
		this.router.navigate([AppRoutes.Home]);
	}
}
