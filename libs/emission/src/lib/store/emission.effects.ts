import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { EmissionHttpService } from '../services/emission-http/emission-http.service';
import { loadEmissions, loadEmissionsFailure, loadEmissionsSuccess } from './emission.actions';

@Injectable()
export class EmissionEffects {
  #actions$ = inject(Actions);
  #emissionHttpService = inject(EmissionHttpService);

  loadEmissions$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(loadEmissions),
      switchMap(() =>
        this.#emissionHttpService.get().pipe(
          map(() => loadEmissionsSuccess({ remoteData: true })),
          catchError((error) => of(loadEmissionsFailure({ error })))
        )
      )
    )
  );
}
