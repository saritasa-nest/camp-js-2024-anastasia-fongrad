import { FC } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

import { genreRoutes } from '../features/genres/routes';

const routes: RouteObject[] = [
	{
		path: '*',
		element: <Navigate to="/genre" />,
	},
	...genreRoutes,
];

/** Root router component. */
export const RootRouter: FC = () => useRoutes(routes);
