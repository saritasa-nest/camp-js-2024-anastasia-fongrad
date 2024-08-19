import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, EventEmitter, Output, OnInit, DestroyRef } from '@angular/core';
import { FormGroup, ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthorizationService } from '@js-camp/angular/core/services/authorization.service';
import { FormValidationService } from '@js-camp/angular/core/services/form-validation.service';
import { tap, map, catchError } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

import { EmptyPipe } from '../../../../../shared/pipes/empty.pipe';

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
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {

	/** An event that is raised when a login is successful. */
	@Output()
	public readonly loginSuccess = new EventEmitter<void>();

	/** Login form group. */
	protected readonly loginForm: FormGroup<LoginForm>;

	/** Form validation service. */
	protected readonly formValidationService = inject(FormValidationService);

	private readonly formBuilder = inject(NonNullableFormBuilder);

	private readonly authService = inject(AuthorizationService);

	private readonly destroyRef = inject(DestroyRef);

	private readonly changeDetectorRef = inject(ChangeDetectorRef);

	public constructor() {
		this.loginForm = UserLoginForm.initialize(this.formBuilder);
	}

	/** Clears form errors on input value change. */
	public ngOnInit(): void {
		this.initializeErrorsReset();
	}

	private initializeErrorsReset(): void {
		this.loginForm.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe(() => this.loginForm.updateValueAndValidity());
	}

	/** Handles form submit event. */
	protected onSubmit(): void {
		if (this.loginForm?.invalid) {
			return;
		}
		const formData = this.loginForm.getRawValue();
		this.authService.login(formData).pipe(
			map(() => undefined),
			catchError((error: unknown) => this.formValidationService.parseError(error)),
			tap(errors => {
				if (!errors) {
					this.loginSuccess.emit();
				} else {
					this.formValidationService.setFormErrors(this.loginForm, errors);
					this.changeDetectorRef.markForCheck();
				}
			}),
		)
			.subscribe();
	}
}
