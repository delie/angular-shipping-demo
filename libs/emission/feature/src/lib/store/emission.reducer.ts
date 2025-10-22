import { createReducer, on } from '@ngrx/store';
import { EmissionState } from '../interfaces/emission-state.interface';
import { loadEmissions, loadEmissionsFailure, loadEmissionsSuccess } from './emission.actions';
import { initialEmissionState } from './emission.state';

export const emissionReducer = createReducer(
  initialEmissionState,

  on(loadEmissions, (state): EmissionState => {
    return {
      ...state,
      emissions: {
        ...state.emissions,
        status: 'Loading',
      },
    };
  }),

  on(
    loadEmissionsSuccess,
    (state, { remoteData }): EmissionState => ({
      ...state,
      emissions: {
        status: 'Success',
        value: remoteData,
      },
    })
  ),

  on(
    loadEmissionsFailure,
    (state, { error }): EmissionState => ({
      ...state,
      emissions: {
        status: 'Failure',
        value: [],
        error,
      },
    })
  )
);
