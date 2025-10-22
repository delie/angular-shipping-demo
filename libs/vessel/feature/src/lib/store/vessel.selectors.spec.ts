import { mockVesselState } from '../testing/mock-vessel-state';
import { selectVesselFeature, selectVesselsError, selectVesselsStatus, selectVesselsValue } from './vessel.selectors';

describe('Vessel Selectors', () => {
  describe('selectVesselFeature()', () => {
    it('should return Vessel feature', () => {
      expect(selectVesselFeature.projector(mockVesselState)).toEqual(mockVesselState);
    });
  });

  describe('selectVesselsValue()', () => {
    it('should return vessels.value', () => {
      expect(selectVesselsValue.projector(mockVesselState)).toEqual(mockVesselState.vessels.value);
    });
  });

  describe('selectVesselsStatus()', () => {
    it('should return vessels.status', () => {
      expect(selectVesselsStatus.projector(mockVesselState)).toEqual(mockVesselState.vessels.status);
    });
  });

  describe('selectVesselsError()', () => {
    it('should return vessels.error', () => {
      expect(selectVesselsError.projector(mockVesselState)).toEqual(mockVesselState.vessels.error);
    });
  });
});
