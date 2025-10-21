import { createReducer, on } from '@ngrx/store';

import { VesselState } from '../interfaces/vessel-state.interface';
import { loadVessels, loadVesselsFailure, loadVesselsSuccess } from './vessel.actions';
import { initialVesselState } from './vessel.state';

export const vesselReducer = createReducer(
  initialVesselState,

  on(loadVessels, (state): VesselState => {
    return {
      ...state,
      vessels: {
        ...state.vessels,
        status: 'Loading',
      },
    };
  }),

  on(
    loadVesselsSuccess,
    (state, { remoteData }): VesselState => ({
      ...state,
      vessels: {
        status: 'Success',
        value: remoteData,
      },
    })
  ),

  on(
    loadVesselsFailure,
    (state, { error }): VesselState => ({
      ...state,
      vessels: {
        status: 'Failure',
        value: [],
        error,
      },
    })
  )
);
