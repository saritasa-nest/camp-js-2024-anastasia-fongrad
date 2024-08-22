import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const GenrePage = lazy(() => import('./pages/GenrePage').then(module => ({ default: module.GenrePage })));
const GenreDetails = lazy(() => import('./components/GenreDetails').then(module => ({ default: module.GenreDetails })));

/** Genre routes. */
export const genreRoutes: RouteObject[] = [
	{
		path: 'genre',
		element: <GenrePage />,
		children: [
			{
				path: ':genreId',
				element: <GenreDetails/>,
			},
		],
	},
	{
		path: '*',
		element: <Navigate to="GenrePage" />,
	},
];
