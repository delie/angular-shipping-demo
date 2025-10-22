import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockInstance } from 'vitest';
import { VesselState } from '../../interfaces/vessel-state.interface';
import { loadVessels } from '../../store/vessel.actions';
import { VesselsComponent } from './vessels.component';

describe('VesselsComponent', () => {
  let component: VesselsComponent;
  let fixture: ComponentFixture<VesselsComponent>;
  let store$: MockStore;

  const mockState: { vessel: VesselState } = {
    vessel: {
      vessels: { status: null, value: [] },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VesselsComponent],
      providers: [
        provideMockStore({ initialState: mockState }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(VesselsComponent);
    component = fixture.componentInstance;
    store$ = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  describe('ngOnInit()', () => {
    beforeEach(() => {
      vitest.spyOn(component, 'loadVessels');
      component.ngOnInit();
    });
    it('should call loadVessels()', () => {
      expect(component.loadVessels).toHaveBeenCalledTimes(1);
    });
  });

  describe('loadVessels()', () => {
    describe('when vesselsStatus === "Success"', () => {
      beforeEach(() => {
        const newState = {
          ...mockState,
          vessel: {
            ...mockState.vessel,
            vessels: { status: 'Success', value: [] },
          },
        };
        store$.setState(newState);

        vitest.spyOn(store$, 'dispatch');
        component.loadVessels();
      });
      it('should not dispatch loadVessels()', () => expect(store$.dispatch).not.toHaveBeenCalled());
    });

    describe('when vesselsStatus !== "Success"', () => {
      let spy: MockInstance;
      beforeEach(() => {
        const newState = {
          ...mockState,
          vessel: {
            ...mockState.vessel,
            vessels: { status: null, value: [] },
          },
        };
        store$.setState(newState);
        spy = vitest.spyOn(store$, 'dispatch');
        component.loadVessels();
      });
      it('should dispatch loadVessels()', () => expect(spy.mock.calls).toEqual([[loadVessels()]]));
    });
  });
});
