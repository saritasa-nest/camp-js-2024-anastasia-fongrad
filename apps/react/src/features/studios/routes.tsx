import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StudioPage = lazy(() => import('./pages/StudioPage').then(module => ({ default: module.StudioPage })));
const StudioDetails = lazy(() => import('./components/StudioDetails')
	.then(module => ({ default: module.StudioDetails })));

/** Studio routes. */
export const studioRoutes: RouteObject[] = [
	{
		path: 'studio',
		element: <StudioPage />,
		children: [
			{
				path: ':studioId',
				element: <StudioDetails/>,
			},
		],
	},
];
