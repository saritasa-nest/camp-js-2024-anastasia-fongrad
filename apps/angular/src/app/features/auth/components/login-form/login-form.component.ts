import { Component, inject } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginForm } from '@js-camp/core/models/login-form';

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
	],
})
export class LoginFormComponent {
	/** 1. */
	protected loginForm: FormGroup<LoginForm>;

	private readonly formBuilder: FormBuilder = inject(FormBuilder);

	private constructor() {
		this.loginForm = UserLoginForm.initialize(this.formBuilder);
	}
}
