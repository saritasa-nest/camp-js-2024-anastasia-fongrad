import { Component, inject } from '@angular/core';
import { HeaderComponent } from '@js-camp/angular/shared/components/header/header.component';
import { AppRoutes } from '@js-camp/angular/core/utils/enums/app-routes.enum';
import { Router, RouterModule } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';

/** Login page component. */
@Component({
	selector: 'camp-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	standalone: true,
	imports: [
		HeaderComponent,
		LoginFormComponent,
		RouterModule,
	],
})
export class LoginComponent {

	/** Available app route names. */
	protected readonly appRoutes = AppRoutes;

	private readonly router = inject(Router);

	/** Called when the user successfully logs in. */
	protected onLoginSuccess(): void {
		this.router.navigate([AppRoutes.Home]);
	}
}
