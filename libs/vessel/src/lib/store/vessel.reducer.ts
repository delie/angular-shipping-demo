import { createReducer, on } from '@ngrx/store';

import { VesselState } from '../interfaces/vessel-state.interface';
import { loadVessels, loadVesselsFailure, loadVesselsSuccess } from './vessel.actions';
import { initialVesselState } from './vessel.state';

export const vesselReducer = createReducer(
  initialVesselState,

  on(loadVessels, (state): VesselState => {
    return {
      ...state,
      data: false,
    };
  }),

  on(
    loadVesselsSuccess,
    (state, { remoteData }): VesselState => ({
      ...state,
      data: remoteData,
    })
  ),

  on(
    loadVesselsFailure,
    (state, { error }): VesselState => ({
      ...state,
      data: false,
    })
  )
);
