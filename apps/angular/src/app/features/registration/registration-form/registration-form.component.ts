import { Component, inject, EventEmitter, Output, OnInit, DestroyRef } from '@angular/core';
import { FormGroup, ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthorizationService } from '@js-camp/angular/core/services/authorization.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ServerError } from '@js-camp/core/models/server-error';
import { FormValidationService } from '@js-camp/angular/core/services/form-validation.service';
import { Observable, tap, ReplaySubject } from 'rxjs';
import { CommonModule } from '@angular/common';

import { UserRegistrationForm, RegistrationForm } from './registration-form.model';

/** Registration form component. */
@Component({
	selector: 'camp-registration-form',
	templateUrl: './registration-form.component.html',
	styleUrls: ['./registration-form.component.css'],
	standalone: true,
	imports: [
		ReactiveFormsModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		CommonModule,
	],
})
export class RegistrationFormComponent implements OnInit {

	/** Emits an event when registration is successful. */
	@Output()
	public readonly registrationSuccess = new EventEmitter<void>();

	/** An array of registration errors received from a server. */
	protected readonly registrationErrors$: Observable<void | ServerError[]>;

	/** Registration form group. */
	protected readonly registrationForm: FormGroup<RegistrationForm>;

	private readonly formValidationService = inject(FormValidationService);

	private readonly formBuilder = inject(NonNullableFormBuilder);

	private readonly registrationService = inject(AuthorizationService);

	private readonly destroyRef = inject(DestroyRef);

	private readonly registrationErrorsSubject$ = new ReplaySubject<void | ServerError[]>(1);

	public constructor() {
		this.registrationForm = UserRegistrationForm.initialize(this.formBuilder);
		this.registrationErrors$ = this.registrationErrorsSubject$.asObservable();
	}

	/** Clears form errors on input value change. */
	public ngOnInit(): void {
		this.initializeFormValues();
	}

	private initializeFormValues(): void {
		Object.keys(this.registrationForm.controls).forEach(controlName => {
			const control = this.registrationForm.get(controlName);
			control?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
				.subscribe(() => {
					control.setErrors(null);
				});
		});
	}

	/**
	 * Requests an error message for the current form field.
	 * @param serverErrors A list of errors received from a server.
	 * @param attributeName A name of a form field.
	 */
	protected getFieldError(
		serverErrors: ServerError[] | null | void,
		attributeName: string,
	): string | null {
		return this.formValidationService.getErrorMessage(this.registrationForm, attributeName, serverErrors);
	}

	/** Handles form submit event. */
	protected onSubmit(): void {
		if (!this.registrationForm?.valid) {
			return;
		}
		const formData = this.registrationForm.getRawValue();
		this.registrationService.register(formData).pipe(
			tap(errors => {
				if (!errors) {
					this.registrationSuccess.emit();
				} else {
					this.formValidationService.setFormErrors(this.registrationForm, errors);
				}
				this.registrationErrorsSubject$.next(errors);
			}),
		)
			.subscribe();
	}
}
