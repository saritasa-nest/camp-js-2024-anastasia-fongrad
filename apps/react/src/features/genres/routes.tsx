import { lazy, Suspense } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const GenrePage = lazy(() => import('./pages/GenrePage').then(module => ({ default: module.GenrePage })));
const GenreDetails = lazy(() =>
	import('./components/GenreDetails').then(module => ({ default: module.GenreDetails })));

// Fallback UI for suspense
const Loading = () => <div>Loading...</div>;

/** Genre routes. */
export const genreRoutes: RouteObject[] = [
	{
		path: 'genre',
		element: (
			<Suspense fallback={<Loading />}>
				<GenrePage />
			</Suspense>
		),
		children: [
			{
				path: ':genreId',
				element: (
					<Suspense fallback={<Loading />}>
						<GenreDetails />
					</Suspense>
				),
			},
		],
	},
	{
		path: '*',
		element: <Navigate to="GenrePage" />,
	},
];
