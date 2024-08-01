import { Component, inject, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Subject } from 'rxjs';
import { mustMatch } from '@js-camp/angular/core/utils/helpers/form-validators';
import { RegistrationModel } from '@js-camp/core/utils/enums/model-registration.enum';
import { UserRegistrationService } from '@js-camp/angular/core/services/user-registration.service';
import { UserRegistration } from '@js-camp/core/models/user-registration';
import { FormBuilder } from '@angular/forms';

export type RegistrationForm = {

	readonly email: FormControl<string>;

	readonly firstName: FormControl<string>;

	readonly lastName: FormControl<string>;

	readonly password: FormControl<string>;

	readonly confirmPassword: FormControl<string>;

	readonly avatar: FormControl<string>;
};

export namespace RegistrationForm {
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
			avatar: fb.nonNullable.control(''),
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
	protected readonly registrationModel = RegistrationModel;

	/** 1. */
	protected avatarImage = '';

	private readonly destroy$ = new Subject<void>();

	private readonly formBuilder = new FormBuilder();

	private readonly registrationService: UserRegistrationService = inject(UserRegistrationService);

	/** 1. */
	@Input()
	protected registrationForm: FormGroup<RegistrationForm> = RegistrationForm.initialize(this.formBuilder);

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

	/** 1. */
	protected onSubmit(): void {
		if (this.registrationForm?.valid) {
			const formData = this.registrationForm.value;
			const userRegistration = new UserRegistration({
				email: formData[RegistrationModel.Email] ?? '',
				firstName: formData[RegistrationModel.FirstName] ?? '',
				lastName: formData[RegistrationModel.LastName] ?? '',
				password: formData[RegistrationModel.Password] ?? '',
				avatar: this.avatarImage,
			});
			this.registrationService.postRegistrationData(userRegistration).subscribe(response => {
				console.log('Registration successful', response);
			}, error => {
				console.error('Registration failed', error);
			});
		}
	}
}
