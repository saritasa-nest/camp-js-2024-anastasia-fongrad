import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

/** Registration confirmation dialog component. */
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
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationDialogComponent {
	/** A link to the dialog popup. */
	public readonly dialogRef = inject(MatDialogRef<RegistrationDialogComponent>);
}
