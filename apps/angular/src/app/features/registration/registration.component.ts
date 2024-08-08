import { Component, inject } from '@angular/core';
import { HeaderComponent } from '@js-camp/angular/app/features/header/header.component';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AppRoutes } from '@js-camp/angular/core/utils/enums/app-routes.enum';

import { RegistrationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

/** Registration page component. */
@Component({
	selector: 'camp-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.css'],
	standalone: true,
	imports: [
		HeaderComponent,
		RegistrationFormComponent,
		RouterModule,
	],
})
export class RegistrationComponent {

	/** Available app route names. */
	protected readonly appRoutes = AppRoutes;

	private readonly dialog = inject(MatDialog);

	private readonly router = inject(Router);

	/** Called when the user has successfully registered. */
	protected onRegistrationSuccess(): void {
		this.dialog.open(RegistrationDialogComponent);
		this.router.navigate([AppRoutes.Login]);
	}
}
