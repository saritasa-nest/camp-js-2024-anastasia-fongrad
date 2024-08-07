import { Component, inject, EventEmitter, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AuthorizationService } from '@js-camp/angular/core/services/authorization.service';
import { FormValidationService } from '@js-camp/angular/core/services/form-validation.service';
import { InputErrors } from '@js-camp/core/models/input-error';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

import { EmptyPipe } from '../../../../../../shared/pipes/empty.pipe';

import { UserLoginForm, LoginForm } from './login-form.model';

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
		CommonModule,
	],
})
export class LoginFormComponent {

	/** 1. */
	@Output()
	public readonly loginSuccess = new EventEmitter<void>();

	/** 1. */
	protected readonly loginForm: FormGroup<LoginForm>;

	/** 1. */
	protected loginErrors$?: Observable<void | InputErrors[]>;

	private readonly formBuilder = inject(NonNullableFormBuilder);

	private readonly loginService = inject(AuthorizationService);

	private readonly formValidationService = inject(FormValidationService);

	public constructor() {
		this.loginForm = UserLoginForm.initialize(this.formBuilder);
	}

	/**
	 * 1.
	 * @param serverErrors 1.
	 * @param attributeName 1.
	 * @returns 1.
	 */
	protected getFieldError(
		serverErrors: InputErrors[] | null | void,
		attributeName: string,
	): string | null {
		return this.formValidationService.getErrorMessage(this.loginForm, attributeName, serverErrors);
	}

	/** 1. */
	protected onSubmit(): void {
		if (!this.loginForm?.valid) {
			return;
		}
		const formData = this.loginForm.getRawValue();
		this.loginErrors$ = this.loginService.login(formData);
	}
}
