import { Routes } from '@angular/router';

/** Routes object. */
export const appRoutes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('../app/features/anime-catalog/anime-catalog.component').then(c => c.AnimeCatalogComponent),
	},
	{
		path: 'login',
		loadComponent: () =>
			import('../app/features/auth/auth.component').then(c => c.AuthComponent),
	},
];
