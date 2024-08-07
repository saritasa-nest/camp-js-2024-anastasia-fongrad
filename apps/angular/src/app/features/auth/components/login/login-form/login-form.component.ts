import { Component, inject, EventEmitter, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserLoginForm, LoginForm } from './login-form.model';
import { AuthorizationService } from '@js-camp/angular/core/services/authorization.service';
import { FormValidationService } from '@js-camp/angular/core/services/form-validation.service';
import { InputErrors } from '@js-camp/core/models/input-error';
import { Observable } from 'rxjs';

import { EmptyPipe } from '../../../../../../shared/pipes/empty.pipe';

/** Main app component. */
@Component({
	selector: 'camp-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.css'],
	standalone: true,
	imports: [
		ReactiveFormsModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		EmptyPipe,
	],
})
export class LoginFormComponent {

	/** 1. */
	@Output()
	public loginSuccess = new EventEmitter<void>();

	/** 1. */
	protected loginForm: FormGroup<LoginForm>;

	/** 1. */
	protected loginResult$?: Observable<void | InputErrors[]>;

	private readonly formBuilder = inject(NonNullableFormBuilder);

	private readonly loginService = inject(AuthorizationService);

	private readonly formValidationService = inject(FormValidationService);

	public constructor() {
		this.loginForm = UserLoginForm.initialize(this.formBuilder);
	}

	/**
	 * 1.
	 * @param attributeName 1.
	 */
	protected getErrorMessage(attributeName: string): string | null {
		return this.formValidationService.getErrorMessage(this.loginForm, attributeName);
	}

	/** 1. */
	protected onSubmit(): void {
		if (!this.loginForm?.valid) {
			return;
		}
		const formData = this.loginForm.getRawValue();
		this.loginResult$ = this.loginService.login(formData);
	}
}
