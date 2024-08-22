import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

import { ImageDialog } from './image-dialog.model';

/** Full-size image dialog component. */
@Component({
	selector: 'camp-image-dialog',
	templateUrl: './image-dialog.component.html',
	styleUrls: ['./image-dialog.component.css'],
	standalone: true,
	imports: [
		MatDialogActions,
		MatDialogClose,
		MatDialogTitle,
		MatDialogContent,
		MatButton,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageDialogComponent {

	/** Image dialog data. */
	public readonly data = inject<ImageDialog>(MAT_DIALOG_DATA);
}
