import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const loadEmissions = createAction('[Emission] Load');
export const loadEmissionsSuccess = createAction('[Emission] Load Success', props<{ remoteData: boolean }>());
export const loadEmissionsFailure = createAction('[Emission] Load Failure', props<{ error: HttpErrorResponse }>());
