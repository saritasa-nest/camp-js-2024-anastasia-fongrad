import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const AnimePage = lazy(() => import('./pages/AnimePage').then(module => ({ default: module.AnimePage })));
const AnimeDetails = lazy(() => import('./components/AnimeDetails').then(module => ({ default: module.AnimeDetails })));

/** Genre routes. */
export const animeRoutes: RouteObject[] = [
	{
		path: 'anime',
		element: <AnimePage />,
		children: [
			{
				path: ':genreId',
				element: <AnimeDetails/>,
			},
		],
	},
	{
		path: '*',
		element: <Navigate to="AnimePage" />,
	},
];
