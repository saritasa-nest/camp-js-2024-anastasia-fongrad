import { Routes } from '@angular/router';

import { AnimeCatalogComponent } from './features/anime-catalog/anime-catalog.component';

/** Routes object. */
export const appRoutes: Routes = [
	{
		path: '',
		component: AnimeCatalogComponent,
	},
	{
		path: ':offset/:limit',
		component: AnimeCatalogComponent,
	},
	{
		path: ':offset/:limit/:search',
		component: AnimeCatalogComponent,
	},
	{
		path: ':offset/:limit/:status',
		component: AnimeCatalogComponent,
	},
	{
		path: ':offset/:limit/:search/:status',
		component: AnimeCatalogComponent,
	},
];
