import { Routes } from '@angular/router';

import { AppRoutes } from '../core/utils/enums/app-routes.enum';
import { AlreadyLoggedInGuard } from '../core/guards/already-logged-in.guard';

/** Routes object. */
export const appRoutes: Routes = [
	{
		path: AppRoutes.Home,
		loadComponent: () =>
			import('../app/features/anime-catalog/anime-catalog.component').then(c => c.AnimeCatalogComponent),
	},
	{
		path: AppRoutes.Login,
		loadComponent: () =>
			import('./features/login/login.component').then(c => c.LoginComponent),
		canActivate: [AlreadyLoggedInGuard],
	},
	{
		path: AppRoutes.Registration,
		loadComponent: () =>
			import('./features/registration/registration.component').then(c => c.RegistrationComponent),
		canActivate: [AlreadyLoggedInGuard],
	},
	{
		path: '**',
		redirectTo: '/',
	},
];
