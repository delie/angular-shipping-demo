import { HttpErrorResponse } from '@angular/common/http';
import { EmissionState } from '../interfaces/emission-state.interface';
import { loadEmissions, loadEmissionsFailure, loadEmissionsSuccess } from './emission.actions';
import { emissionReducer } from './emission.reducer';
import { initialEmissionState } from './emission.state';

describe('Emission reducer', () => {
  let result: EmissionState;

  const mockHttpError: HttpErrorResponse = {
    error: 'oh no',
    status: 401,
  } as HttpErrorResponse;

  describe('loadEmissions()', () => {
    beforeEach(() => {
      result = emissionReducer(initialEmissionState, loadEmissions());
    });
    it('should expected state', () => {
      const expected: EmissionState = { data: false };
      expect(result).toEqual(expected);
    });
  });

  describe('loadEmissionsSuccess()', () => {
    beforeEach(() => {
      result = emissionReducer(initialEmissionState, loadEmissionsSuccess({ remoteData: true }));
    });
    it('should expected state', () => {
      const expected: EmissionState = { data: true };
      expect(result).toEqual(expected);
    });
  });

  describe('loadEmissionsFailure()', () => {
    beforeEach(() => {
      result = emissionReducer(initialEmissionState, loadEmissionsFailure({ error: mockHttpError }));
    });
    it('should expected state', () => {
      const expected: EmissionState = { data: false };
      expect(result).toEqual(expected);
    });
  });
});
