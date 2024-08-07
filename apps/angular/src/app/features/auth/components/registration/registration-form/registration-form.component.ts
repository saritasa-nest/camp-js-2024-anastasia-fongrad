import { Component, inject, EventEmitter, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthorizationService } from '@js-camp/angular/core/services/authorization.service';

import { InputErrors } from '@js-camp/core/models/input-error';
import { FormValidationService } from '@js-camp/angular/core/services/form-validation.service';
import { Observable } from 'rxjs';
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
export class RegistrationFormComponent {

	/** Emits an event when registration is successful. */
	@Output()
	public readonly registrationSuccess = new EventEmitter<void>();

	/** An array of registration errors received from a server. */
	protected registrationErrors$?: Observable<void | InputErrors[]>;

	/** Registration form group. */
	protected readonly registrationForm: FormGroup<RegistrationForm>;

	private readonly formValidationService = inject(FormValidationService);

	private readonly formBuilder = inject(NonNullableFormBuilder);

	private readonly registrationService = inject(AuthorizationService);

	public constructor() {
		this.registrationForm = UserRegistrationForm.initialize(this.formBuilder);
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
		return this.formValidationService.getErrorMessage(this.registrationForm, attributeName, serverErrors);
	}

	/** Handles form submit event. */
	protected onSubmit(): void {
		const formData = this.registrationForm.getRawValue();
		this.registrationErrors$ = this.registrationService.register(formData);
	}
}
