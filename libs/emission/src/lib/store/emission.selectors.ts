import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmissionState } from '../interfaces/emission-state.interface';
import { emissionStateKey } from './emission.state';

export const selectEmissionFeature = createFeatureSelector<EmissionState>(emissionStateKey);

export const selectEmissionsValue = createSelector(selectEmissionFeature, (state: EmissionState) => state.emissions.value);
export const selectEmissionsStatus = createSelector(selectEmissionFeature, (state: EmissionState) => state.emissions.status);
export const selectEmissionsError = createSelector(selectEmissionFeature, (state: EmissionState) => state.emissions.error);
