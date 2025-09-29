import { makeEnvironmentProviders } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { EmissionEffects } from './emission.effects';
import { emissionReducer } from './emission.reducer';
import { emissionStateKey } from './emission.state';

export const provideEmissionStore = () =>
  makeEnvironmentProviders([
    provideState(emissionStateKey, emissionReducer),
    provideEffects([EmissionEffects]),
  ]);
