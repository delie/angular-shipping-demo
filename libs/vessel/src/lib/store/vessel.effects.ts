import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { VesselHttpService } from '../services/vessel-http/vessel-http.service';
import { loadVessels, loadVesselsFailure, loadVesselsSuccess } from './vessel.actions';

@Injectable()
export class VesselEffects {
  #actions$ = inject(Actions);
  #vesselHttpService = inject(VesselHttpService);

  loadVessels$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(loadVessels),
      switchMap(() =>
        this.#vesselHttpService.get().pipe(
          map((remoteData) => loadVesselsSuccess({ remoteData })),
          catchError((error) => of(loadVesselsFailure({ error })))
        )
      )
    )
  );
}
