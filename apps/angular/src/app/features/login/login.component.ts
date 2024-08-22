import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderComponent } from '@js-camp/angular/app/features/header/header.component';
import { AppRoutes } from '@js-camp/angular/core/utils/enums/app-routes.enum';
import { Router, RouterModule } from '@angular/router';

import { LoginFormComponent } from './components/login-form/login-form.component';

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
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

	private readonly router = inject(Router);

	/** Called when the user successfully logs in. */
	protected onLoginSuccess(): void {
		this.router.navigate([AppRoutes.Home]);
	}

	/** Gets a full registration route. */
	protected getRegistrationRoute(): string {
		return `/${AppRoutes.Registration}`;
	}
}
