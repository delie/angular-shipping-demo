import { HttpErrorResponse } from '@angular/common/http';
import { EmissionState } from '../interfaces/emission-state.interface';
import { mockEmissionResponse } from '../testing/mock-emission-response';
import { loadEmissions, loadEmissionsFailure, loadEmissionsSuccess } from './emission.actions';
import { emissionReducer } from './emission.reducer';
import { initialEmissionState } from './emission.state';

describe('Emission reducer', () => {
  let result: EmissionState;

  describe('loadEmissions()', () => {
    beforeEach(() => {
      result = emissionReducer(initialEmissionState, loadEmissions());
    });
    it('should expected state', () => {
      const expected: EmissionState = {
        ...initialEmissionState,
        emissions: {
          ...initialEmissionState.emissions,
          status: 'Loading',
        },
      };
      expect(result).toEqual(expected);
    });
  });

  describe('loadEmissionsSuccess()', () => {
    beforeEach(() => {
      const state: EmissionState = {
        ...initialEmissionState,
        emissions: {
          ...initialEmissionState.emissions,
          status: 'Loading',
        },
      };
      result = emissionReducer(state, loadEmissionsSuccess({ remoteData: mockEmissionResponse }));
    });
    it('should expected state', () => {
      const expected: EmissionState = {
        ...initialEmissionState,
        emissions: {
          status: 'Success',
          value: mockEmissionResponse,
        },
      };
      expect(result).toEqual(expected);
    });
  });

  describe('loadEmissionsFailure()', () => {
    const error = { error: 'error', status: 401 } as HttpErrorResponse;

    beforeEach(() => {
      const state: EmissionState = {
        ...initialEmissionState,
        emissions: {
          ...initialEmissionState.emissions,
          status: 'Loading',
        },
      };
      result = emissionReducer(state, loadEmissionsFailure({ error }));
    });
    it('should expected state', () => {
      const expected: EmissionState = {
        ...initialEmissionState,
        emissions: {
          status: 'Failure',
          value: [],
          error,
        },
      };
      expect(result).toEqual(expected);
    });
  });
});
