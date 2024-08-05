import { Component, inject, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginForm } from '@js-camp/core/models/login-form';
import { AuthorizationService } from '@js-camp/angular/core/services/authorization.service';
import { InputErrors } from '@js-camp/core/models/input-error';
import { UserAccessToken } from '@js-camp/core/models/user-access-token';

import { EmptyPipe } from '../../../../../shared/pipes/empty.pipe';

export namespace UserLoginForm {

	/**
	 * 1.
	 * @param fb 1.
	 */
	export function initialize(fb: FormBuilder): FormGroup<LoginForm> {
		return fb.group({
			email: fb.nonNullable.control('', [
				Validators.required,
				Validators.email,
			]),
			password: fb.nonNullable.control('', [Validators.required]),
		});
	}
}

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
	public loginSuccess = new EventEmitter<UserAccessToken>();


	/** 1. */
	protected loginForm: FormGroup<LoginForm>;

	private readonly formBuilder: FormBuilder = inject(FormBuilder);

	private readonly loginService: AuthorizationService = inject(AuthorizationService);

	private inputErrors: InputErrors[] = [];

	public constructor() {
		this.loginForm = UserLoginForm.initialize(this.formBuilder);
	}

	/**
	 * 1.
	 * @param attributeName 1.
	 */
	protected getErrorMessage(attributeName: string): string | null {
		const inputError = this.inputErrors.find(error => error.attributeName === attributeName);
		if (inputError) {
			return inputError.errors[0];
		}
		return null;
	}

	private setFormErrors(): void {
		Object.keys(this.loginForm.controls).forEach(key => {
			const control = this.loginForm.get(key);
			const inputError = this.inputErrors.find(error => error.attributeName === key);
			if (control) {
				if (inputError) {
					control.setErrors({ serverError: inputError.errors[0] });
			  	} else {
					const existingErrors = control.errors;
					if (existingErrors) {
						delete existingErrors['serverError'];
						if (Object.keys(existingErrors).length === 0) {
							control.setErrors(null);
						} else {
							control.setErrors(existingErrors);
						}
					}
				}
			}
		});
	}

	/** 1. */
	protected onSubmit(): void {
		if (this.loginForm?.valid) {
			const formData = this.loginForm.getRawValue();
			this.loginService.postLoginData(formData).subscribe(response => {
				this.inputErrors = [];
				this.loginSuccess.emit(response);
			}, error => {
				if (Array.isArray(error)) {
					this.inputErrors = error;
				}
			});
			this.setFormErrors();
		}
	}
}
