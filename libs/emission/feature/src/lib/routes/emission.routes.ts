import { Route } from '@angular/router';
import { provideVesselStore } from '@app/vessel/feature';
import { EmissionsComponent } from '../containers/emissions/emissions.component';
import { provideEmissionStore } from '../store/emission.provider';

export const emissionRoutes: Route[] = [
  {
    path: '',
    component: EmissionsComponent,
    providers: [provideVesselStore(), provideEmissionStore()],
  },
];
