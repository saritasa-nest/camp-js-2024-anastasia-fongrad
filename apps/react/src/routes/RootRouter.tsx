import { FC } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

import { postsRoutes } from '../features/posts/routes';

const routes: RouteObject[] = [
  {
    path: '*',
    element: <Navigate to="/posts" />,
  },
  ...postsRoutes,
];

/** Root router component. */
export const RootRouter: FC = () => useRoutes(routes);
