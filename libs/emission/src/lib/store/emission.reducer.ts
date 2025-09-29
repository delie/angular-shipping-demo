import { createReducer, on } from '@ngrx/store';
import { VATState } from '../../interfaces/vat-state.interface';
import { loadVATList, loadVATListFailure, loadVATListSuccess } from './vat.actions';
import { initialVATState } from './vat.state';

export const vatReducer = createReducer(
  initialVATState,

  on(loadVATList, (state, { useCache }): VATState => {
    const shouldLoad = useCache === false || state.list.status !== 'Success';
    const status = shouldLoad ? 'Loading' : state.list.status;
    return {
      ...state,
      list: {
        status,
        value: [],
      },
    };
  }),

  on(
    loadVATListSuccess,
    (state, { remoteData }): VATState => ({
      ...state,
      list: {
        status: 'Success',
        value: remoteData,
      },
    })
  ),

  on(
    loadVATListFailure,
    (state, { error }): VATState => ({
      ...state,
      list: {
        status: 'Failure',
        value: [],
        error,
      },
    })
  )
);
