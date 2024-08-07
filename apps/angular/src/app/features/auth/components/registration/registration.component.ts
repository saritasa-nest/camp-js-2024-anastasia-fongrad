import { Component, inject } from '@angular/core';
import { HeaderComponent } from '@js-camp/angular/shared/components/header/header.component';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AppRoutes } from '@js-camp/angular/core/utils/enums/app-routes.enum';

import { RegistrationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

/** Main app component. */
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

	private readonly dialog = inject(MatDialog);

	private readonly router = inject(Router);

	/** 1. */
	protected readonly appRoutes = AppRoutes;

	/** 1. */
	protected onRegistrationSuccess(): void {
		this.dialog.open(RegistrationDialogComponent);
		this.router.navigate([AppRoutes.Login]);
	}
}
