import { Component, inject, EventEmitter, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegistrationModel } from '@js-camp/core/utils/enums/model-registration.enum';
import { AuthorizationService } from '@js-camp/angular/core/services/authorization.service';

import { InputErrors } from '@js-camp/core/models/input-error';
import { FormValidationService } from '@js-camp/angular/core/services/form-validation.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

import { UserRegistrationForm, RegistrationForm } from './registration-form.model';

/** Main app component. */
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
export class RegistrationFormComponent {

	/** 1. */
	@Output()
	public readonly registrationSuccess = new EventEmitter<void>();

	/** 1. */
	protected readonly registrationModel = RegistrationModel;

	/** 1. */
	protected registrationErrors$?: Observable<void | InputErrors[]>;

	/** 1. */
	protected readonly registrationForm: FormGroup<RegistrationForm>;

	private readonly formValidationService = inject(FormValidationService);

	private readonly formBuilder = inject(NonNullableFormBuilder);

	private readonly registrationService = inject(AuthorizationService);

	public constructor() {
		this.registrationForm = UserRegistrationForm.initialize(this.formBuilder);
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
		return this.formValidationService.getErrorMessage(this.registrationForm, attributeName, serverErrors);
	}

	/** 1. */
	protected onSubmit(): void {
		const formData = this.registrationForm.getRawValue();
		this.registrationErrors$ = this.registrationService.register(formData);
	}
}
