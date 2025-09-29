import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VesselState } from '../interfaces/vessel-state.interface';
import { vesselStateKey } from './vessel.state';

export const selectVesselFeature = createFeatureSelector<VesselState>(vesselStateKey);

export const selectVesselData = createSelector(selectVesselFeature, (state: VesselState) => state.data);
