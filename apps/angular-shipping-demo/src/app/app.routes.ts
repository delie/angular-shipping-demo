import { Route } from '@angular/router';
import { provideEmissionStore } from '@demo/emission';
import { provideVesselStore } from '@demo/vessel';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@demo/dashboard').then((m) => m.dashboardRoutes),
    providers: [
      provideVesselStore(),
      provideEmissionStore(),
    ],
  },
];
