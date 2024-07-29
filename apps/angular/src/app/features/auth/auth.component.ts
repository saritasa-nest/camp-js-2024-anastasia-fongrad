import { Component } from '@angular/core';
import { HeaderComponent } from '@js-camp/angular/shared/components/header/header.component';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { mustMatch } from '@js-camp/angular/core/utils/helpers/form-validators';
import { RegistrationModel } from '@js-camp/core/utils/enums/model-registration.enum';

/** Main app component. */
@Component({
	selector: 'camp-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css'],
	standalone: true,
	imports: [
		HeaderComponent,
		ReactiveFormsModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
	],
})
export class AuthComponent {
	/** 1. */
	protected registrationModel = RegistrationModel;

	/** 1. */
	protected registrationForm = new FormGroup({
		[RegistrationModel.FirstName]: new FormControl(null, Validators.required),
		[RegistrationModel.LastName]: new FormControl(null, Validators.required),
		[RegistrationModel.Email]: new FormControl(null, [Validators.required, Validators.email]),
		[RegistrationModel.Password]: new FormControl(null, Validators.required),
		[RegistrationModel.ConfirmPassword]: new FormControl(null, Validators.required),
		[RegistrationModel.Avatar]: new FormControl(null),
	}, { validators: mustMatch('password', 'confirmPassword') });

	/** 1. */
	protected onSubmit(): void {
		console.log(this.registrationForm.value);
	}
}
