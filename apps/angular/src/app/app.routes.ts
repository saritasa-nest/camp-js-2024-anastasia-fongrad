import { Routes } from '@angular/router';

/** Routes object. */
export const appRoutes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('../app/features/anime-catalog/anime-catalog.component').then(x => x.AnimeCatalogComponent),
	},
];
