import { FC, lazy } from 'react';

interface routesConfig {
  path: string;
  name: string;

  Component: FC;
}
export const routes: routesConfig[] = [
  {
    path: '/basic',
    name: 'basic',
    Component: lazy(() => import('./views/index'))
  },
  {
    path: '/basic/sass',
    name: 'sass',
    Component: lazy(() => import('./views/sass'))
  },
  {
    path: '/basic/group',
    name: 'group',
    Component: lazy(() => import('./views/group'))
  },
  {
    path: '/basic/staff',
    name: 'staff',
    Component: lazy(() => import('./views/staff'))
  }
];
