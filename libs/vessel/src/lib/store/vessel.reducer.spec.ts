import { HttpErrorResponse } from '@angular/common/http';
import { VesselState } from '../interfaces/vessel-state.interface';
import { loadVessels, loadVesselsFailure, loadVesselsSuccess } from './vessel.actions';
import { vesselReducer } from './vessel.reducer';
import { initialVesselState } from './vessel.state';

describe('Vessel reducer', () => {
  let result: VesselState;

  const mockHttpError: HttpErrorResponse = {
    error: 'oh no',
    status: 401,
  } as HttpErrorResponse;

  describe('loadVessels()', () => {
    beforeEach(() => {
      result = vesselReducer(initialVesselState, loadVessels());
    });
    it('should expected state', () => {
      const expected: VesselState = { data: false };
      expect(result).toEqual(expected);
    });
  });

  describe('loadVesselsSuccess()', () => {
    beforeEach(() => {
      result = vesselReducer(initialVesselState, loadVesselsSuccess({ remoteData: true }));
    });
    it('should expected state', () => {
      const expected: VesselState = { data: true };
      expect(result).toEqual(expected);
    });
  });

  describe('loadVesselsFailure()', () => {
    beforeEach(() => {
      result = vesselReducer(initialVesselState, loadVesselsFailure({ error: mockHttpError }));
    });
    it('should expected state', () => {
      const expected: VesselState = { data: false };
      expect(result).toEqual(expected);
    });
  });
});
