import { Routes } from '@angular/router';

import { AnimeTableComponent } from './features/anime_table/anime_table.component';

/** Routes object. */
export const appRoutes: Routes = [
	{
		path: '',
		component: AnimeTableComponent,
	},
];
