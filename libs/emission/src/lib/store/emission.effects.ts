import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, filter, map, of, switchMap, withLatestFrom } from 'rxjs';
import { VATService } from '../../services/vat/vat.service';
import { loadVATList, loadVATListFailure, loadVATListSuccess } from './vat.actions';
import { selectVATList } from './vat.selectors';

@Injectable()
export class VATEffects {
  #actions$ = inject(Actions);
  #store$ = inject(Store);
  #vatService = inject(VATService);

  loadVATList$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(loadVATList),
      withLatestFrom(this.#store$.select(selectVATList)),
      filter(([, { status }]) => status === 'Loading'),
      switchMap(() =>
        this.#vatService.getList().pipe(
          map((remoteData) => loadVATListSuccess({ remoteData })),
          catchError((error) => of(loadVATListFailure({ error })))
        )
      )
    )
  );
}
