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
		path: ':offset/:limit/:type',
		component: AnimeCatalogComponent,
	},
	{
		path: ':offset/:limit/:ordering',
		component: AnimeCatalogComponent,
	},
	{
		path: ':offset/:limit/:search/:type',
		component: AnimeCatalogComponent,
	},
	{
		path: ':offset/:limit/:search/:ordering',
		component: AnimeCatalogComponent,
	},
	{
		path: ':offset/:limit/:type/:ordering',
		component: AnimeCatalogComponent,
	},
	{
		path: ':offset/:limit/:search/:type/:ordering',
		component: AnimeCatalogComponent,
	},
];
