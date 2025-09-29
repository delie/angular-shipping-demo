import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const loadVessels = createAction('[Vessel] Load');
export const loadVesselsSuccess = createAction('[Vessel] Load Success', props<{ remoteData: boolean }>());
export const loadVesselsFailure = createAction('[Vessel] Load Failure', props<{ error: HttpErrorResponse }>());
