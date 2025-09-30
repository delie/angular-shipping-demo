import { Route } from '@angular/router';
import { provideEmissionStore } from '@app/emission';
import { provideVesselStore } from '@app/vessel';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@app/dashboard').then((m) => m.dashboardRoutes),
    providers: [
      provideVesselStore(),
      provideEmissionStore(),
    ],
  },
];
