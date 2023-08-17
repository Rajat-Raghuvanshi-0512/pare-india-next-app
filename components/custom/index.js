import { lazy } from 'react';
const Button = lazy(() => import('./Button'));
const Drawer = lazy(() => import('./Drawer'));
export { Drawer, Button };
