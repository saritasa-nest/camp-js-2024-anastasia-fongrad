import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const GenresPage = lazy(() => import('./pages/GenresPage').then(module => ({ default: module.GenresPage })));
const ExamplePage = lazy(() => import('./pages/ExamplePage').then(module => ({ default: module.ExamplePage })));
const DisplayPage = lazy(() => import('./pages/DisplayPage').then(module => ({ default: module.DisplayPage })));

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

/** 1. */
export const exampleRoutes: RouteObject[] = [
	{
		path: 'example',
		element: <ExamplePage />,
		children: [
			{
				path: 'anime',
				element: <DisplayPage title="Anime Page" />,
			},
			{
				path: 'genres',
				element: <DisplayPage title="Genres Page" />,
			},
			{
				path: 'studios',
				element: <DisplayPage title="Studios Page" />,
			},
			{
				path: 'login',
				element: <DisplayPage title="Login Page" />,
			},
			{
				path: 'logout',
				element: <DisplayPage title="Logout Page" />,
			},
			{
				path: 'profile',
				element: <DisplayPage title="Profile Page" />,
			},
		],
	},
	{
		path: '*',
		element: <Navigate to="ExamplePage" />,
	},
];
