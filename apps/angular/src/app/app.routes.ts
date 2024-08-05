import { Routes } from '@angular/router';

import { AppRoutes } from '../core/utils/enums/app-routes.enum';

/** Routes object. */
export const appRoutes: Routes = [
	{
		path: AppRoutes.Home,
		loadComponent: () =>
			import('../app/features/anime-catalog/anime-catalog.component').then(c => c.AnimeCatalogComponent),
	},
	{
		path: AppRoutes.Authorization,
		loadComponent: () =>
			import('../app/features/auth/auth.component').then(c => c.AuthComponent),
	},
];
