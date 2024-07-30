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

	/** 1. */
	protected registrationForm = new FormGroup({
		[RegistrationModel.FirstName]: new FormControl(null, Validators.required),
		[RegistrationModel.LastName]: new FormControl(null, Validators.required),
		[RegistrationModel.Email]: new FormControl(null, [Validators.required, Validators.email]),
		[RegistrationModel.Password]: new FormControl(null, [Validators.required, Validators.minLength(8)]),
		[RegistrationModel.ConfirmPassword]: new FormControl(null, Validators.required),
		[RegistrationModel.Avatar]: new FormControl(null),
	}, { validators: mustMatch('password', 'confirmPassword') });
}
