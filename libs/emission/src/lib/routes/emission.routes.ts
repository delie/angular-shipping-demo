import { Route } from '@angular/router';
import { EmissionsComponent } from '../containers/emissions/emissions.component';

export const emissionRoutes: Route[] = [
  {
    path: '',
    component: EmissionsComponent,
  },
];
