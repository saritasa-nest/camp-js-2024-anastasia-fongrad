import { FC } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

import { genreRoutes } from '../features/genres/routes';
import { studioRoutes } from '../features/studios/routes';

const routes: RouteObject[] = [
	{
		path: '*',
		element: <Navigate to="/genre" />,
	},
	...genreRoutes,
	...studioRoutes,
];

/** Root router component. */
export const RootRouter: FC = () => useRoutes(routes);
