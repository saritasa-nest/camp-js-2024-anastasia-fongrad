import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const ExamplePage = lazy(() => import('./pages/GenrePage').then(module => ({ default: module.ExamplePage })));
const GenreDetails = lazy(() => import('./components/GenreDetails').then(module => ({ default: module.GenreDetails })));

/** 1. */
export const genreRoutes: RouteObject[] = [
	{
		path: 'genre',
		element: <ExamplePage />,
		children: [
			{
				path: ':genreId',
				element: <GenreDetails title="Genres"/>,
			},
		],
	},
	{
		path: '*',
		element: <Navigate to="ExamplePage" />,
	},
];
