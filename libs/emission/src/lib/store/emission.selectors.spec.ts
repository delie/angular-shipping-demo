import { mockEmissionState } from '../testing/mock-emission-state';
import { selectEmissionFeature, selectEmissionsError, selectEmissionsStatus, selectEmissionsValue } from './emission.selectors';

describe('Emission Selectors', () => {
  describe('selectEmissionFeature()', () => {
    it('should return emission feature', () => {
      expect(selectEmissionFeature.projector(mockEmissionState)).toEqual(mockEmissionState);
    });
  });

  describe('selectEmissionsValue()', () => {
    it('should return emissions value', () => {
      expect(selectEmissionsValue.projector(mockEmissionState)).toEqual(mockEmissionState.emissions.value);
    });
  });

  describe('selectEmissionsStatus()', () => {
    it('should return emissions status', () => {
      expect(selectEmissionsStatus.projector(mockEmissionState)).toEqual(mockEmissionState.emissions.status);
    });
  });

  describe('selectEmissionsError()', () => {
    it('should return emissions error', () => {
      expect(selectEmissionsError.projector(mockEmissionState)).toEqual(mockEmissionState.emissions.error);
    });
  });
});
