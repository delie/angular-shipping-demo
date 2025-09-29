import { mockEmissionState } from '../testing/mock-emission-state';
import { selectEmissionData, selectEmissionFeature } from './emission.selectors';

describe('Emission Selectors', () => {
  describe('selectEmissionFeature()', () => {
    it('should return emission feature', () => {
      expect(selectEmissionFeature.projector(mockEmissionState)).toEqual(mockEmissionState);
    });
  });

  describe('selectEmissionData()', () => {
    it('should return emission data', () => {
      expect(selectEmissionData.projector(mockEmissionState)).toEqual(mockEmissionState.data);
    });
  });
});
