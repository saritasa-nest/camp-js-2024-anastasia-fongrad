import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegistrationModel } from '@js-camp/core/utils/enums/model-registration.enum';

/** Main app component. */
@Component({
	selector: 'camp-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.css'],
	standalone: true,
	imports: [
		ReactiveFormsModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
	],
})
export class LoginFormComponent {
	/** 1. */
	protected loginForm = new FormGroup({
		[RegistrationModel.Email]: new FormControl(null, Validators.required),
		[RegistrationModel.Password]: new FormControl(null, Validators.required),
	});
}
