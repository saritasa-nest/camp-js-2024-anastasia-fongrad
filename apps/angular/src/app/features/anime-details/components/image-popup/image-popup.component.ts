import { Component, inject } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

import { ImagePopup } from './image-popup.model';

/** Main app component. */
@Component({
	selector: 'camp-image-popup',
	templateUrl: './image-popup.component.html',
	styleUrls: ['./image-popup.component.css'],
	standalone: true,
	imports: [
		MatDialogActions,
		MatDialogClose,
		MatDialogTitle,
		MatDialogContent,
		MatButton,
	],
})
export class ImagePopupComponent {
	/** A link to the dialog popup. */
	public readonly dialogRef = inject(MatDialogRef<ImagePopupComponent>);

	/** 1. */
	public data = inject<ImagePopup>(MAT_DIALOG_DATA);
}
