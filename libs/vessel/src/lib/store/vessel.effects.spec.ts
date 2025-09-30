import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { VesselHttpService } from '../services/vessel-http/vessel-http.service';
import { mockVesselResponse } from '../testing/mock-vessel-response';
import { loadVessels, loadVesselsFailure, loadVesselsSuccess } from './vessel.actions';
import { VesselEffects } from './vessel.effects';
import { initialVesselState } from './vessel.state';

describe('VesselEffects', () => {
  let actions$: Observable<Action>;
  let effects: VesselEffects;
  let vesselHttpService: VesselHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VesselEffects,
        provideMockStore({ initialState: initialVesselState }),
        provideMockActions(() => actions$),
        {
          provide: VesselHttpService,
          useValue: {
            get: () => of([]),
          },
        },
      ],
    });
    effects = TestBed.inject(VesselEffects);
    vesselHttpService = TestBed.inject(VesselHttpService);
  });

  describe('loadVessels$', () => {
    describe('on success', () => {
      beforeEach(() => {
        actions$ = hot('-a', { a: loadVessels() });
        vesselHttpService.get = vitest.fn(() => of(mockVesselResponse));
      });
      it('should return success action', () => {
        const action = loadVesselsSuccess({ remoteData: mockVesselResponse });
        const expected$ = cold('-b', { b: action });
        expect(effects.loadVessels$).toBeObservable(expected$);
      });
    });

    describe('on failure', () => {
      const error = { error: 'error', status: 401 } as HttpErrorResponse;
      beforeEach(() => {
        actions$ = hot('-a', { a: loadVessels() });
        vesselHttpService.get = vitest.fn(() => cold('#', null, error));
      });
      it('should return failure action', () => {
        const action = loadVesselsFailure({ error });
        const expected$ = cold('-b', { b: action });
        expect(effects.loadVessels$).toBeObservable(expected$);
      });
    });
  });
});
