import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { EmissionHttpService } from '../services/emission-http/emission-http.service';
import { mockEmissionResponse } from '../testing/mock-emission-response';
import { loadEmissions, loadEmissionsFailure, loadEmissionsSuccess } from './emission.actions';
import { EmissionEffects } from './emission.effects';
import { initialEmissionState } from './emission.state';

describe('EmissionEffects', () => {
  let actions$: Observable<Action>;
  let effects: EmissionEffects;
  let emissionHttpService: EmissionHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EmissionEffects,
        provideMockStore({ initialState: initialEmissionState }),
        provideMockActions(() => actions$),
        {
          provide: EmissionHttpService,
          useValue: {
            get: () => of([]),
          },
        },
      ],
    });
    effects = TestBed.inject(EmissionEffects);
    emissionHttpService = TestBed.inject(EmissionHttpService);
  });

  describe('loadEmissions$', () => {
    describe('on success', () => {
      beforeEach(() => {
        actions$ = hot('-a', { a: loadEmissions() });
        emissionHttpService.get = vitest.fn(() => of(mockEmissionResponse));
      });
      it('should return success action', () => {
        const action = loadEmissionsSuccess({ remoteData: mockEmissionResponse });
        const expected$ = cold('-b', { b: action });
        expect(effects.loadEmissions$).toBeObservable(expected$);
      });
    });

    describe('on failure', () => {
      const error = { error: 'error', status: 401 } as HttpErrorResponse;
      beforeEach(() => {
        actions$ = hot('-a', { a: loadEmissions() });
        emissionHttpService.get = vitest.fn(() => cold('#', null, error));
      });
      it('should return failure action', () => {
        const action = loadEmissionsFailure({ error });
        const expected$ = cold('-b', { b: action });
        expect(effects.loadEmissions$).toBeObservable(expected$);
      });
    });
  });
});
