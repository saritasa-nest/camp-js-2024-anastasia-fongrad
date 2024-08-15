import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const ExamplePage = lazy(() => import('./pages/ExamplePage').then(module => ({ default: module.ExamplePage })));
const DisplayPage = lazy(() => import('./pages/DisplayPage').then(module => ({ default: module.DisplayPage })));

/** 1. */
export const exampleRoutes: RouteObject[] = [
	{
		path: 'example',
		element: <ExamplePage />,
		children: [
			{
				path: 'anime',
				element: <DisplayPage title="Anime" />,
			},
			{
				path: 'genres',
				element: <DisplayPage title="Genres" />,
			},
			{
				path: 'studios',
				element: <DisplayPage title="Studios" />,
			},
			{
				path: 'login',
				element: <DisplayPage title="Login" />,
			},
			{
				path: 'logout',
				element: <DisplayPage title="Logout" />,
			},
			{
				path: 'profile',
				element: <DisplayPage title="Profile" />,
			},
		],
	},
	{
		path: '*',
		element: <Navigate to="ExamplePage" />,
	},
];
