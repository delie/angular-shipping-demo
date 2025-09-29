import { mockState } from '../../testing/data/mock-state';
import { selectVATList, selectVATState } from './vat.selectors';

describe('VAT Selectors', () => {
  describe('selectVATState()', () => {
    it('should return vat', () => {
      expect(selectVATState.projector(mockState.core)).toEqual(mockState.core.vat);
    });
  });

  describe('selectVATList()', () => {
    it('should return vatList', () => {
      expect(selectVATList.projector(mockState.core.vat)).toEqual(mockState.core.vat.list);
    });
  });
});
