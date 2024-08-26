import { Component, ChangeDetectorRef, inject, EventEmitter, Output, OnInit, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthorizationService } from '@js-camp/angular/core/services/authorization.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormValidationService } from '@js-camp/angular/core/services/form-validation.service';
import { catchError, debounceTime, EMPTY } from 'rxjs';
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
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormComponent implements OnInit {

	/** Emits an event when registration is successful. */
	@Output()
	public readonly registrationSuccess = new EventEmitter<void>();

	/** Registration form group. */
	protected readonly registrationForm: FormGroup<RegistrationForm>;

	/** Form validation service. */
	protected readonly formValidationService = inject(FormValidationService);

	private readonly formBuilder = inject(NonNullableFormBuilder);

	private readonly registrationService = inject(AuthorizationService);

	private readonly destroyRef = inject(DestroyRef);

	private readonly changeDetectorRef = inject(ChangeDetectorRef);

	public constructor() {
		this.registrationForm = UserRegistrationForm.initialize(this.formBuilder, this.destroyRef);
	}

	/** Clears form errors on input value change. */
	public ngOnInit(): void {
		this.initializeErrorsReset();
	}

	private initializeErrorsReset(): void {
		this.registrationForm.valueChanges.pipe(
			debounceTime(300),
			takeUntilDestroyed(this.destroyRef),
		)
			.subscribe(() => {
				this.registrationForm.updateValueAndValidity({ emitEvent: false });
			});
	}

	/** Handles form submit event. */
	protected onSubmit(): void {
		if (this.registrationForm?.invalid) {
			return;
		}
		const formData = this.registrationForm.getRawValue();
		this.registrationService.register(formData).pipe(
			catchError((error: unknown) => {
				const errors = this.formValidationService.parseError(error);
				this.formValidationService.setFormErrors(this.registrationForm, errors);
				this.changeDetectorRef.markForCheck();
				return EMPTY;
			}),
			takeUntilDestroyed(this.destroyRef),
		)
			.subscribe(() => this.registrationSuccess.emit());
	}
}
