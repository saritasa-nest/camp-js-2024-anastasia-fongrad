import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '@js-camp/angular/app/features/header/header.component';
import { RouterModule } from '@angular/router';

import { AnimeDetailsFormComponent } from '../anime-form/anime-form.component';

/** Login page component. */
@Component({
	selector: 'camp-anime-create',
	templateUrl: './anime-create.component.html',
	styleUrls: ['./anime-create.component.css'],
	standalone: true,
	imports: [
		HeaderComponent,
		AnimeDetailsFormComponent,
		RouterModule,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeCreateComponent {}
