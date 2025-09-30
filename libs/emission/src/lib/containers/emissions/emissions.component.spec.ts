import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockVesselResponse, VesselState } from '@app/vessel';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockInstance } from 'vitest';
import { EmissionState } from '../../interfaces/emission-state.interface';
import { loadEmissions } from '../../store/emission.actions';
import { mockEmissionResponse } from '../../testing/mock-emission-response';
import { EmissionsComponent } from './emissions.component';

describe('EmissionsComponent', () => {
  let component: EmissionsComponent;
  let fixture: ComponentFixture<EmissionsComponent>;
  let store$: MockStore;

  const mockState: {
    emission: EmissionState;
    vessel: VesselState;
  } = {
    emission: {
      data: { status: null, value: null },
    },
    vessel: {
      data: { status: null, value: null },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmissionsComponent],
      providers: [
        provideMockStore({ initialState: mockState }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EmissionsComponent);
    component = fixture.componentInstance;
    store$ = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  describe('Observables', () => {
    describe('emissions$', () => {
      describe('when emissions data changes', () => {
        let spy: MockInstance;
        beforeEach(() => {
          spy = vitest.spyOn(component, 'onEmissionDataChange').mockImplementation(() => null);
          const newState = {
            ...mockState,
            emission: {
              data: { status: 'Success', value: mockEmissionResponse },
            },
          };
          store$.setState(newState);
        });
        it('should call onEmissionChange()', () => {
          expect(spy.mock.calls).toEqual([['Success']]);
        });
      });
    });

    describe('vessels$', () => {
      describe('when vessel data changes', () => {
        let spy: MockInstance;
        beforeEach(() => {
          spy = vitest.spyOn(component, 'onVesselDataChange').mockImplementation(() => null);
          const newState = {
            ...mockState,
            vessel: {
              data: { status: 'Success', value: mockVesselResponse },
            },
          };
          store$.setState(newState);
        });
        it('should call onVesselDataChange()', () => {
          expect(spy.mock.calls).toEqual([['Success']]);
        });
      });
    });
  });

  describe('onEmissionDataChange()', () => {
    describe('when status is null', () => {
      beforeEach(() => {
        vitest.spyOn(store$, 'dispatch');
        component.onEmissionDataChange(null);
      });
      it('should dispatch loadEmissions() action', () => {
        expect(store$.dispatch).toHaveBeenCalledExactlyOnceWith(loadEmissions());
      });
    });

    describe('when status is not null', () => {
      beforeEach(() => {
        vitest.spyOn(store$, 'dispatch');
        component.onEmissionDataChange('Success');
      });
      it('should not dispatch loadEmissions() action', () => {
        expect(store$.dispatch).not.toHaveBeenCalled();
      });
    });
  });
});
