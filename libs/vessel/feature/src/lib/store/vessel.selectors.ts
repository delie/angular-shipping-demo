import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VesselState } from '../interfaces/vessel-state.interface';
import { vesselStateKey } from './vessel.state';

export const selectVesselFeature = createFeatureSelector<VesselState>(vesselStateKey);

export const selectVesselsValue = createSelector(selectVesselFeature, (state: VesselState) => state.vessels.value);
export const selectVesselsStatus = createSelector(selectVesselFeature, (state: VesselState) => state.vessels.status);
export const selectVesselsError = createSelector(selectVesselFeature, (state: VesselState) => state.vessels.error);
