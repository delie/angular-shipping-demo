import { Route } from '@angular/router';
import { VesselsComponent } from '../containers/vessels/vessels.component';
import { provideVesselStore } from '../store/vessel.provider';

export const vesselRoutes: Route[] = [
  {
    path: '',
    component: VesselsComponent,
    providers: [provideVesselStore()],
  },
];
