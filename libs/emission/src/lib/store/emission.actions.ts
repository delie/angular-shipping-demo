import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const loadEmissions = createAction('[Emissions] Load');
export const loadEmissionsSuccess = createAction('[Emissions] Load Success', props<{ remoteData: boolean }>());
export const loadEmissionsFailure = createAction('[Emissions] Load Failure', props<{ error: HttpErrorResponse }>());
