import { Route } from '@angular/router';
import { DashboardRootComponent } from '../components/dashboard-root/dashboard-root.component';
import { HomeComponent } from '../components/home/home.component';

export const dashboardRoutes: Route[] = [
  {
    path: '',
    component: DashboardRootComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'vessels',
        loadChildren: () => import('@app/vessel').then((m) => m.vesselRoutes),
      },
      {
        path: 'emissions',
        loadChildren: () => import('@app/emission').then((m) => m.emissionRoutes),
      },
    ],
  },
];
