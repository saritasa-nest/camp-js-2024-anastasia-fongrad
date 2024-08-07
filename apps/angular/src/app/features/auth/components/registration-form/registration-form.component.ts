import { Component, inject, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegistrationModel } from '@js-camp/core/utils/enums/model-registration.enum';
import { AuthorizationService } from '@js-camp/angular/core/services/authorization.service';
import { RegistrationForm } from '@js-camp/core/models/registration-form';
import { InputErrors } from '@js-camp/core/models/input-error';
import { passwordStrong, mustMatch } from '@js-camp/angular/core/utils/helpers/form-validators';
import { FormValidationService } from '@js-camp/angular/core/services/form-validation.service';
import { UserAccessToken } from '@js-camp/core/models/user-access-token';
import { Observable } from 'rxjs';

export namespace UserRegistrationForm {

	/**
	 * 1.
	 * @param fb 1.
	 */
	export function initialize(fb: FormBuilder): FormGroup<RegistrationForm> {
		return fb.group({
			email: fb.nonNullable.control('', [
				Validators.required,
				Validators.email,
			]),
			firstName: fb.nonNullable.control('', [Validators.required]),
			lastName: fb.nonNullable.control('', [Validators.required]),
			password: fb.nonNullable.control('', [Validators.required]),
			confirmPassword: fb.nonNullable.control('', [Validators.required]),
		}, {
			validators: [
				passwordStrong('password'),
				mustMatch('password', 'confirmPassword'),
			],
		});
	}
}

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
	],
})
export class RegistrationFormComponent {

	/** 1. */
	@Output()
	public registrationSuccess = new EventEmitter<void>();

	/** 1. */
	protected readonly registrationModel = RegistrationModel;

	/** 1. */
	protected registrationResult$?: Observable<UserAccessToken | InputErrors[]>;

	/** 1. */
	protected registrationForm: FormGroup<RegistrationForm>;

	private readonly formValidationService = inject(FormValidationService);

	private readonly formBuilder: FormBuilder = inject(FormBuilder);

	private readonly registrationService: AuthorizationService = inject(AuthorizationService);

	public constructor() {
		this.registrationForm = UserRegistrationForm.initialize(this.formBuilder);
	}

	/**
	 * 1.
	 * @param attributeName 1.
	 * @returns 1.
	 */
	protected getErrorMessage(attributeName: string): string | null {
		return this.formValidationService.getErrorMessage(this.registrationForm, attributeName);
	}

	/** 1. */
	protected onSubmit(): void {
		if (!this.registrationForm?.valid) {
			return;
		}
		const formData = this.registrationForm.getRawValue();
		this.registrationResult$ = this.registrationService.postRegistrationData(formData);
	}
}
