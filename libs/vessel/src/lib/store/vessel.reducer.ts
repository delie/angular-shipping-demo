import { createReducer, on } from '@ngrx/store';

import { VesselState } from '../interfaces/vessel-state.interface';
import { loadVessels, loadVesselsFailure, loadVesselsSuccess } from './vessel.actions';
import { initialVesselState } from './vessel.state';

export const vesselReducer = createReducer(
  initialVesselState,

  on(loadVessels, (state): VesselState => {
    return {
      ...state,
      data: {
        ...state.data,
        status: 'Loading',
      },
    };
  }),

  on(
    loadVesselsSuccess,
    (state, { remoteData }): VesselState => ({
      ...state,
      data: {
        status: 'Success',
        value: remoteData,
      },
    })
  ),

  on(
    loadVesselsFailure,
    (state): VesselState => ({
      ...state,
      data: {
        status: 'Failure',
        value: null,
      },
    })
  )
);
