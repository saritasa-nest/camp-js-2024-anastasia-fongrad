import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderComponent } from '@js-camp/angular/app/features/header/header.component';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AppRoutes } from '@js-camp/angular/core/utils/enums/app-routes.enum';

import { RegistrationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';

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
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {

	private readonly dialog = inject(MatDialog);

	private readonly router = inject(Router);

	/** Called when the user has successfully registered. */
	protected onRegistrationSuccess(): void {
		this.dialog.open(RegistrationDialogComponent);
		this.router.navigate([AppRoutes.Login]);
	}

	/** Gets a full registration route. */
	protected getLoginRoute(): string {
		return `/${AppRoutes.Login}`;
	}
}
