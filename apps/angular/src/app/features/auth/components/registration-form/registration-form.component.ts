import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { mustMatch } from '@js-camp/angular/core/utils/helpers/form-validators';
import { RegistrationModel } from '@js-camp/core/utils/enums/model-registration.enum';

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
	protected registrationModel = RegistrationModel;

	protected avatarImage = '';

	/** 1. */
	protected registrationForm = new FormGroup({
		[RegistrationModel.FirstName]: new FormControl(null, Validators.required),
		[RegistrationModel.LastName]: new FormControl(null, Validators.required),
		[RegistrationModel.Email]: new FormControl(null, [Validators.required, Validators.email]),
		[RegistrationModel.Password]: new FormControl(null, [Validators.required, Validators.minLength(8)]),
		[RegistrationModel.ConfirmPassword]: new FormControl(null, Validators.required),
		[RegistrationModel.Avatar]: new FormControl(null),
	}, { validators: mustMatch('password', 'confirmPassword') });

	/**
	 * 1.
	 * @param fileInputEvent 1.
	 */
	csvInputChange(event: Event) {
		const element = event.target as HTMLInputElement;
		if (element.files && element.files[0]) {
			const reader = new FileReader();
			reader.onload = (e: ProgressEvent<FileReader>) => {
				if(e.target?.result) {
					this.avatarImage = e.target.result as string;
				}
			};
			reader.readAsDataURL(element.files[0]);
		}
	}
}
