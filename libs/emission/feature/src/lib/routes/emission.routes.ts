import { Route } from '@angular/router';
import { provideEmissionStore } from '@app/emission/data-access';
import { EmissionsComponent } from '../containers/emissions/emissions.component';

export const emissionRoutes: Route[] = [
  {
    path: '',
    component: EmissionsComponent,
    providers: [provideEmissionStore()],
  },
];
