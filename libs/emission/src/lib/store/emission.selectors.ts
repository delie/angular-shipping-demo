import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmissionState } from '../interfaces/emission-state.interface';
import { emissionStateKey } from './emission.state';

export const selectEmissionFeature = createFeatureSelector<EmissionState>(emissionStateKey);

export const selectEmissionData = createSelector(selectEmissionFeature, (state: EmissionState) => state.data);
