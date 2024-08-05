import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

/** Main app component. */
@Component({
	selector: 'camp-root',
	templateUrl: './confirmation-dialog.component.html',
	styleUrls: ['./confirmation-dialog.component.css'],
	standalone: true,
	imports: [
		MatButtonModule,
		MatDialogActions,
		MatDialogClose,
		MatDialogTitle,
		MatDialogContent,
	],
})
export class RegistrationDialogComponent {
	/** 1. */
	public readonly dialogRef = inject(MatDialogRef<RegistrationDialogComponent>);
}
