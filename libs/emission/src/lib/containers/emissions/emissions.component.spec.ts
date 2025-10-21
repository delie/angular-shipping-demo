import { ComponentFixture, TestBed } from '@angular/core/testing';
import { loadVessels, selectVesselsStatus, VesselState } from '@app/vessel';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { EmissionState } from '../../interfaces/emission-state.interface';
import { loadEmissions } from '../../store/emission.actions';
import { selectEmissionsStatus } from '../../store/emission.selectors';
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
      emissions: { status: null, value: [] },
    },
    vessel: {
      vessels: { status: null, value: [] },
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

  describe('ngOnInit()', () => {
    beforeEach(() => {
      vitest.spyOn(component, 'loadVessels').mockImplementation(() => null);
      vitest.spyOn(component, 'loadEmissions').mockImplementation(() => null);
      component.ngOnInit();
    });
    it('should call loadVessels()', () => {
      expect(component.loadVessels).toHaveBeenCalledTimes(1);
    });
    it('should call loadEmissions()', () => {
      expect(component.loadEmissions).toHaveBeenCalledTimes(1);
    });
  });

  describe('loadVessels()', () => {
    describe('when vesselsStatus() === "Success"', () => {
      beforeEach(() => {
        store$.overrideSelector(selectVesselsStatus, 'Success');
        vitest.spyOn(store$, 'dispatch');
        component.loadVessels();
      });
      it('should dispatch loadVessels() action', () => {
        expect(store$.dispatch).toHaveBeenCalledWith(loadVessels());
      });
    });
    describe('when vesselsStatus() !== "Success"', () => {
      beforeEach(() => {
        store$.overrideSelector(selectVesselsStatus, 'Loading');
        vitest.spyOn(store$, 'dispatch');
        component.loadVessels();
      });
      it('should not dispatch an action', () => {
        expect(store$.dispatch).not.toHaveBeenCalled();
      });
    });
  });

  describe('loadEmissions()', () => {
    describe('when emissionsStatus() === "Success"', () => {
      beforeEach(() => {
        store$.overrideSelector(selectEmissionsStatus, 'Success');
        vitest.spyOn(store$, 'dispatch');
        component.loadEmissions();
      });
      it('should dispatch loadEmissions() action', () => {
        expect(store$.dispatch).toHaveBeenCalledWith(loadEmissions());
      });
    });
    describe('when emissionsStatus() !== "Success"', () => {
      beforeEach(() => {
        store$.overrideSelector(selectEmissionsStatus, 'Loading');
        vitest.spyOn(store$, 'dispatch');
        component.loadEmissions();
      });
      it('should not dispatch an action', () => {
        expect(store$.dispatch).not.toHaveBeenCalled();
      });
    });
  });
});
