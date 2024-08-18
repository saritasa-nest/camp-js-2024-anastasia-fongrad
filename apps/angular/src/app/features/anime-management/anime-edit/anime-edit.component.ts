import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '@js-camp/angular/app/features/header/header.component';
import { RouterModule } from '@angular/router';

import { AnimeDetailsFormComponent } from '../anime-form/anime-form.component';

/** Login page component. */
@Component({
	selector: 'camp-anime-edit',
	templateUrl: './anime-edit.component.html',
	styleUrls: ['./anime-edit.component.css'],
	standalone: true,
	imports: [
		HeaderComponent,
		AnimeDetailsFormComponent,
		RouterModule,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeEditComponent {}
