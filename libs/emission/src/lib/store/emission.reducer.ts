import { createReducer, on } from '@ngrx/store';
import { EmissionState } from '../interfaces/emission-state.interface';
import { loadEmissions, loadEmissionsFailure, loadEmissionsSuccess } from './emission.actions';
import { initialEmissionState } from './emission.state';

export const emissionReducer = createReducer(
  initialEmissionState,

  on(loadEmissions, (state): EmissionState => {
    return {
      ...state,
      data: {
        ...state.data,
        status: 'Loading',
      },
    };
  }),

  on(
    loadEmissionsSuccess,
    (state, { remoteData }): EmissionState => ({
      ...state,
      data: {
        status: 'Success',
        value: remoteData,
      },
    })
  ),

  on(
    loadEmissionsFailure,
    (state): EmissionState => ({
      ...state,
      data: {
        status: 'Failure',
        value: null,
      },
    })
  )
);
