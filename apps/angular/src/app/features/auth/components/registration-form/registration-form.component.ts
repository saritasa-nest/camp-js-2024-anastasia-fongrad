import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegistrationModel } from '@js-camp/core/utils/enums/model-registration.enum';
import { UserRegistrationService } from '@js-camp/angular/core/services/user-registration.service';
import { FormBuilder } from '@angular/forms';
import { RegistrationForm } from '@js-camp/core/models/registration-form';
import { InputErrors } from '@js-camp/core/models/input-error';
import { passwordStrong, mustMatch } from '@js-camp/angular/core/utils/helpers/form-validators';

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
		}, { validators: [
			passwordStrong('password'),
			mustMatch('password', 'confirmPassword'),
		] });
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
	protected readonly registrationModel = RegistrationModel;

	/** 1. */
	protected avatarImage = '';

	/** 1. */
	protected registrationForm: FormGroup<RegistrationForm>;

	private inputErrors: InputErrors[] = [];

	private readonly formBuilder: FormBuilder = inject(FormBuilder);

	private readonly registrationService: UserRegistrationService = inject(UserRegistrationService);

	public constructor() {
		this.registrationForm = UserRegistrationForm.initialize(this.formBuilder);
	}

	/**
	 * 1.
	 * @param event 1.
	 */
	protected csvInputChange(event: Event): void {
		const element = event.target as HTMLInputElement;
		// eslint-disable-next-line @typescript-eslint/prefer-optional-chain
		if (element.files && element.files[0]) {
			const reader = new FileReader();
			reader.onload = (e: ProgressEvent<FileReader>) => {
				if (e.target?.result) {
					this.avatarImage = e.target.result as string;
				}
			};
			reader.readAsDataURL(element.files[0]);
		}
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
		Object.keys(this.registrationForm.controls).forEach(key => {
			const control = this.registrationForm.get(key);
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
		if (this.registrationForm?.valid) {
			const formData = this.registrationForm.getRawValue();
			this.registrationService.postRegistrationData(formData).subscribe(response => {
				console.log('Registration successful', response);
				this.inputErrors = [];
			}, error => {
				if (Array.isArray(error)) {
					this.inputErrors = error;
				}
			});
			this.setFormErrors();
		}
	}
}
