import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockInstance } from 'vitest';
import { VesselState } from '../../interfaces/vessel-state.interface';
import { loadVessels } from '../../store/vessel.actions';
import { mockVesselResponse } from '../../testing/mock-vessel-response';
import { VesselsComponent } from './vessels.component';

describe('VesselsComponent', () => {
  let component: VesselsComponent;
  let fixture: ComponentFixture<VesselsComponent>;
  let store$: MockStore;

  const mockState: { vessel: VesselState } = {
    vessel: {
      data: { status: null, value: null },
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

  describe('Observables', () => {
    describe('vessels$', () => {
      describe('when vessel data changes', () => {
        let spy: MockInstance;
        beforeEach(() => {
          spy = vitest.spyOn(component, 'onVesselDataChange').mockImplementation(() => null);
          const newState = {
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

  describe('onVesselDataChange()', () => {
    describe('when status is null', () => {
      beforeEach(() => {
        vitest.spyOn(store$, 'dispatch');
        component.onVesselDataChange(null);
      });
      it('should dispatch loadVessels() action', () => {
        expect(store$.dispatch).toHaveBeenCalledExactlyOnceWith(loadVessels());
      });
    });

    describe('when status is not null', () => {
      beforeEach(() => {
        vitest.spyOn(store$, 'dispatch');
        component.onVesselDataChange('Success');
      });
      it('should not dispatch loadVessels() action', () => {
        expect(store$.dispatch).not.toHaveBeenCalled();
      });
    });
  });
});
