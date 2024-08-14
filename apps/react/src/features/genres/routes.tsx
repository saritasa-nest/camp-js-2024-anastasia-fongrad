import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const GenresPage = lazy(() => import('./pages/GenresPage').then(module => ({ default: module.GenresPage })));
const ExamplePage = lazy(() => import('./pages/ExamplePage').then(module => ({ default: module.ExamplePage })))

/** Genres page component. */
export const genresRoutes: RouteObject[] = [
	{
		path: 'genres',
		element: <GenresPage />,
	},
	{
		path: '*',
		element: <Navigate to="GenresPage" />,
	},
];


export const exampleRoutes: RouteObject[] = [
	{
		path: 'example',
		element: <ExamplePage />,
	},
	{
		path: '*',
		element: <Navigate to="ExamplePage" />,
	},
];
