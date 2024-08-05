import { Routes } from '@angular/router';

import { AuthGuard } from '../core/guards/auth-guard';

/** Routes object. */
export const appRoutes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('../app/features/anime-catalog/anime-catalog.component').then(c => c.AnimeCatalogComponent),
		canActivate: [AuthGuard],
	},
	{
		path: 'login',
		loadComponent: () =>
			import('../app/features/auth/auth.component').then(c => c.AuthComponent),
	},
];
