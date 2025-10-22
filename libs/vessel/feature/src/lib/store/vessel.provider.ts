import { makeEnvironmentProviders } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { VesselEffects } from './vessel.effects';
import { vesselReducer } from './vessel.reducer';
import { vesselStateKey } from './vessel.state';

export const provideVesselStore = () =>
  makeEnvironmentProviders([
    provideState(vesselStateKey, vesselReducer),
    provideEffects([VesselEffects]),
  ]);
