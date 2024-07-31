import { Component } from '@angular/core';
import { HeaderComponent } from '@js-camp/angular/shared/components/header/header.component';

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
	],
})
export class AuthComponent {
	/** 1. */
	protected isLoginFormActive = false;

	/** 1. */
	protected showLoginForm(): void {
		this.isLoginFormActive = true;
	}

	/** 1. */
	protected showRegistrationForm(): void {
		this.isLoginFormActive = false;
	}
}
