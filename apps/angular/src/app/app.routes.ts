import { Routes } from '@angular/router';

import { MainPageComponent } from './features/anime-catalog/anime-catalog.component';

/** Routes object. */
export const appRoutes: Routes = [
	{
		path: '',
		component: MainPageComponent,
	},
];
