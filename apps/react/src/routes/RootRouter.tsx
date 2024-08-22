import { FC } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

import { genreRoutes } from '../features/genres/routes';
import { animeRoutes } from '../features/anime/routes';
import { authRoutes } from '../features/auth/routes';

const routes: RouteObject[] = [
	{
		path: '*',
		element: <Navigate to="/anime" />,
	},
	...genreRoutes,
	...animeRoutes,
	...authRoutes,
];

/** Root router component. */
export const RootRouter: FC = () => useRoutes(routes);
