import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@app/dashboard/feature').then((m) => m.dashboardRoutes),
  },
];
