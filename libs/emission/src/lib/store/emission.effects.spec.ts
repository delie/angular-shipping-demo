import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { mockHttpError } from '@vit/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { VATService } from '../../services/vat/vat.service';
import { mockState } from '../../testing/data/mock-state';
import { mockVat } from '../../testing/data/vat.mock';
import { loadVATList, loadVATListFailure, loadVATListSuccess } from './vat.actions';
import { VATEffects } from './vat.effects';

describe('VATEffects', () => {
  let actions$: Observable<Action>;
  let store$: MockStore;
  let effects: VATEffects;
  let vatService: VATService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VATEffects,
        provideMockStore({ initialState: {} }),
        provideMockActions(() => actions$),
        {
          provide: VATService,
          useValue: {
            getList: () => of(mockVat),
          },
        },
      ],
    });
    effects = TestBed.inject(VATEffects);
    store$ = TestBed.inject(MockStore);
    vatService = TestBed.inject(VATService);
  });

  describe('loadVATList$', () => {
    describe('when status !== "Loading"', () => {
      beforeEach(() => {
        const state = {
          core: {
            vat: {
              ...mockState.core.vat,
              list: { value: [], status: 'Success' },
            },
          },
        };
        store$.setState(state);
        actions$ = hot('-a', { a: loadVATList({ useCache: false }) });
        vatService.getList = jest.fn(() => of(mockVat));
      });
      it('should not return an action', () => {
        const expected$ = cold('----');
        expect(effects.loadVATList$).toBeObservable(expected$);
      });
    });

    describe('when status === "Loading"', () => {
      const state = {
        core: {
          vat: {
            ...mockState.core.vat,
            list: { value: [], status: 'Loading' },
          },
        },
      };
      describe('on success', () => {
        beforeEach(() => {
          store$.setState(state);
          actions$ = hot('-a', { a: loadVATList({ useCache: false }) });
          vatService.getList = jest.fn(() => of(mockVat));
        });
        it('should return success action', () => {
          const expected = loadVATListSuccess({ remoteData: mockVat });
          const expected$ = cold('-b', { b: expected });
          expect(effects.loadVATList$).toBeObservable(expected$);
        });
      });

      describe('on failure', () => {
        beforeEach(() => {
          store$.setState(state);
          actions$ = hot('-a', { a: loadVATList({ useCache: false }) });
          vatService.getList = jest.fn(() => cold('#', null, mockHttpError));
        });
        it('should return failure action', () => {
          const expected = loadVATListFailure({ error: mockHttpError });
          const expected$ = cold('-b', { b: expected });
          expect(effects.loadVATList$).toBeObservable(expected$);
        });
      });
    });
  });
});
