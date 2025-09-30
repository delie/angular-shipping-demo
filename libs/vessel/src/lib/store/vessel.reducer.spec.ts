import { HttpErrorResponse } from '@angular/common/http';
import { VesselState } from '../interfaces/vessel-state.interface';
import { mockVesselResponse } from '../testing/mock-vessel-response';
import { loadVessels, loadVesselsFailure, loadVesselsSuccess } from './vessel.actions';
import { vesselReducer } from './vessel.reducer';
import { initialVesselState } from './vessel.state';

describe('Vessel reducer', () => {
  let result: VesselState;

  describe('loadVessels()', () => {
    beforeEach(() => {
      result = vesselReducer(initialVesselState, loadVessels());
    });
    it('should expected state', () => {
      const expected: VesselState = {
        ...initialVesselState,
        data: {
          ...initialVesselState.data,
          status: 'Loading',
        },
      };
      expect(result).toEqual(expected);
    });
  });

  describe('loadVesselsSuccess()', () => {
    beforeEach(() => {
      const state: VesselState = {
        ...initialVesselState,
        data: {
          ...initialVesselState.data,
          status: 'Loading',
        },
      };
      result = vesselReducer(state, loadVesselsSuccess({ remoteData: mockVesselResponse }));
    });
    it('should expected state', () => {
      const expected: VesselState = {
        ...initialVesselState,
        data: {
          status: 'Success',
          value: mockVesselResponse,
        },
      };
      expect(result).toEqual(expected);
    });
  });

  describe('loadVesselsFailure()', () => {
    beforeEach(() => {
      const state: VesselState = {
        ...initialVesselState,
        data: {
          ...initialVesselState.data,
          status: 'Loading',
        },
      };
      const error = { error: 'error', status: 401 } as HttpErrorResponse;
      result = vesselReducer(state, loadVesselsFailure({ error }));
    });
    it('should expected state', () => {
      const expected: VesselState = {
        ...initialVesselState,
        data: {
          status: 'Failure',
          value: null,
        },
      };
      expect(result).toEqual(expected);
    });
  });
});
