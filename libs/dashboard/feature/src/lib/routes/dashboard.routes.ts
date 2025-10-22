import { Route } from '@angular/router';
import { provideVesselStore } from '@app/vessel/data-access';
import { DashboardRootComponent } from '../components/dashboard-root/dashboard-root.component';
import { HomeComponent } from '../components/home/home.component';

export const dashboardRoutes: Route[] = [
  {
    path: '',
    component: DashboardRootComponent,
    providers: [provideVesselStore()],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'vessels',
        loadChildren: () => import('@app/vessel/feature').then((m) => m.vesselRoutes),
      },
      {
        path: 'emissions',
        loadChildren: () => import('@app/emission/feature').then((m) => m.emissionRoutes),
      },
    ],
  },
];
