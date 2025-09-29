import { mockHttpError } from '@vit/testing';
import { VATState } from '../../interfaces/vat-state.interface';
import { mockState } from '../../testing/data/mock-state';
import { mockVat } from '../../testing/data/vat.mock';
import { RequestStatus } from '../../types/request-status.type';
import { loadVATList, loadVATListFailure, loadVATListSuccess } from './vat.actions';
import { vatReducer } from './vat.reducer';
import { initialVATState } from './vat.state';

const state: VATState = mockState.core.vat;

describe('VAT reducer', () => {
  let actual: VATState;

  describe('loadVATList()', () => {
    describe.each<{ when: string; useCache: boolean; status: RequestStatus; expectedStatus: RequestStatus }>([
      { when: 'when useCache === false and list.status === "NotAsked"', useCache: false, status: 'NotAsked', expectedStatus: 'Loading' },
      { when: 'when useCache === false and list.status === "Success"', useCache: false, status: 'Success', expectedStatus: 'Loading' },
      { when: 'when useCache === true and list.status === "NotAsked"', useCache: true, status: 'NotAsked', expectedStatus: 'Loading' },
      { when: 'when useCache === true and list.status === "Success"', useCache: true, status: 'Success', expectedStatus: 'Success' },
    ])('$when', ({ useCache, status, expectedStatus }) => {
      beforeEach(() => {
        const state: VATState = {
          ...mockState.core.vat,
          list: {
            status,
            value: [],
          },
        };
        const action = loadVATList({ useCache });
        actual = vatReducer(state, action);
      });
      it(`should set state`, () => {
        const expected: VATState = {
          ...initialVATState,
          list: {
            status: expectedStatus,
            value: [],
          },
        };
        expect(expected).toEqual(actual);
      });
    });
  });

  describe('loadVATListSuccess()', () => {
    beforeEach(() => {
      const action = loadVATListSuccess({ remoteData: mockVat });
      actual = vatReducer(state, action);
    });
    it('should update list state', () => {
      const expected: VATState = {
        ...initialVATState,
        list: {
          status: 'Success',
          value: mockVat,
        },
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('loadVATListFailure()', () => {
    beforeEach(() => {
      const action = loadVATListFailure({ error: mockHttpError });
      actual = vatReducer(state, action);
    });
    it('should update list state', () => {
      const expected: VATState = {
        ...initialVATState,
        list: {
          status: 'Failure',
          value: [],
          error: mockHttpError,
        },
      };
      expect(actual).toEqual(expected);
    });
  });
});
