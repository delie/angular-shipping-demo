import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { VesselHttpService } from '../services/vessel-http/vessel-http.service';
import { loadVessels, loadVesselsFailure, loadVesselsSuccess } from './vessel.actions';
import { VesselEffects } from './vessel.effects';

describe('VesselEffects', () => {
  let actions$: Observable<Action>;
  let store$: MockStore;
  let effects: VesselEffects;
  let vesselHttpService: VesselHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VesselEffects,
        provideMockStore({ initialState: {} }),
        provideMockActions(() => actions$),
        {
          provide: VesselHttpService,
          useValue: {
            getList: () => of([]),
          },
        },
      ],
    });
    effects = TestBed.inject(VesselEffects);
    store$ = TestBed.inject(MockStore);
    vesselHttpService = TestBed.inject(VesselHttpService);
  });

  describe('loadVessels$', () => {
    const mockVessels = [
      { id: 1, value: 100 },
      { id: 2, value: 200 },
    ];
    const mockHttpError: any = {};

    const state = {
      data: {},
    };
    describe('on success', () => {
      beforeEach(() => {
        store$.setState(state);
        actions$ = hot('-a', { a: loadVessels() });
        vesselHttpService.get = vitest.fn(() => of(mockVessels));
      });
      it('should return success action', () => {
        const expected = loadVesselsSuccess({ remoteData: true });
        const expected$ = cold('-b', { b: expected });
        expect(effects.loadVessels$).toBeObservable(expected$);
      });
    });

    describe('on failure', () => {
      beforeEach(() => {
        store$.setState(state);
        actions$ = hot('-a', { a: loadVessels() });
        vesselHttpService.get = vitest.fn(() => cold('#', null, mockHttpError));
      });
      it('should return failure action', () => {
        const expected = loadVesselsFailure({ error: mockHttpError });
        const expected$ = cold('-b', { b: expected });
        expect(effects.loadVessels$).toBeObservable(expected$);
      });
    });
  });
});
