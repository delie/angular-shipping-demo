import { createSelector } from '@ngrx/store';
import { CoreState } from '../../interfaces/core-state.interface';
import { VATState } from '../../interfaces/vat-state.interface';
import { selectCoreFeature } from '../core.selectors';

export const selectVATState = createSelector(selectCoreFeature, (state: CoreState) => state.vat);
export const selectVATList = createSelector(selectVATState, (state: VATState) => state.list);
