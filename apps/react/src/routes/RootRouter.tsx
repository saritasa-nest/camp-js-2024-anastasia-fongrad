import { FC } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

import { exampleRoutes } from '../features/genres/routes';

const routes: RouteObject[] = [
	{
		path: '*',
		element: <Navigate to="/example" />,
	},
	...exampleRoutes,
];

/** Root router component. */
export const RootRouter: FC = () => useRoutes(routes);
