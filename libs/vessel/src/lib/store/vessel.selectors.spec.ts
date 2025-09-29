import { mockVesselState } from '../testing/mock-vessel-state';
import { selectVesselData, selectVesselFeature } from './vessel.selectors';

describe('Vessel Selectors', () => {
  describe('selectVesselFeature()', () => {
    it('should return Vessel feature', () => {
      expect(selectVesselFeature.projector(mockVesselState)).toEqual(mockVesselState);
    });
  });

  describe('selectVesselData()', () => {
    it('should return Vessel data', () => {
      expect(selectVesselData.projector(mockVesselState)).toEqual(mockVesselState.data);
    });
  });
});
