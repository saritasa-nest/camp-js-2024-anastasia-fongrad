import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
	MAT_DIALOG_DATA,
	MatDialogActions,
	MatDialogClose,
	MatDialogContent,
	MatDialogRef,
	MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

/** 1. */
export type DialogData = {

	/** 1. */
	readonly studioName: string;
};

/** 1. */
@Component({
	selector: 'camp-studios-dialog',
	templateUrl: './studios-dialog.component.html',
	standalone: true,
	imports: [
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		MatButtonModule,
		MatDialogTitle,
		MatDialogContent,
		MatDialogActions,
		MatDialogClose,
	],
})
export class StudiosDialogComponent {

	/** 1. */
	public readonly dialogRef = inject(MatDialogRef<StudiosDialogComponent>);

	/** 1. */
	protected readonly data = inject<DialogData>(MAT_DIALOG_DATA);

	/** 1. */
	protected onNoClick(): void {
		this.dialogRef.close();
	}
}
