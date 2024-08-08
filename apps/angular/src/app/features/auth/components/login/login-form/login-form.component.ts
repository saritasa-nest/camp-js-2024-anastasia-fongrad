import { Component, inject, EventEmitter, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthorizationService } from '@js-camp/angular/core/services/authorization.service';
import { FormValidationService } from '@js-camp/angular/core/services/form-validation.service';
import { InputErrors } from '@js-camp/core/models/input-error';
import { Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

import { EmptyPipe } from '../../../../../../shared/pipes/empty.pipe';

import { UserLoginForm, LoginForm } from './login-form.model';

/** Login form component. */
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

	/** An event that is raised when a login is successful. */
	@Output()
	public readonly loginSuccess = new EventEmitter<void>();

	/** Login form group. */
	protected readonly loginForm: FormGroup<LoginForm>;

	/** An array of login errors received from the server. */
	protected loginErrors$?: Observable<void | InputErrors[]>;

	private readonly formBuilder = inject(NonNullableFormBuilder);

	private readonly authService = inject(AuthorizationService);

	private readonly formValidationService = inject(FormValidationService);

	public constructor() {
		this.loginForm = UserLoginForm.initialize(this.formBuilder);
	}

	/**
	 * Requests an error message for the current form field.
	 * @param serverErrors A list of errors received from a server.
	 * @param attributeName A name of a form field.
	 */
	protected getFieldError(
		serverErrors: InputErrors[] | null | void,
		attributeName: string,
	): string | null {
		return this.formValidationService.getErrorMessage(this.loginForm, attributeName, serverErrors);
	}

	/** Handles form submit event. */
	protected onSubmit(): void {
		if (!this.loginForm?.valid) {
			return;
		}
		const formData = this.loginForm.getRawValue();
		this.loginErrors$ = this.authService.login(formData).pipe(
			tap(result => {
				if (!result) {
					this.loginSuccess.emit();
				}
			}),
		);
	}
}
