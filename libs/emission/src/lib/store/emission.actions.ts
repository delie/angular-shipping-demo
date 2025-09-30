import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { EmissionResponse } from '../types/emission-reponse.type';

export const loadEmissions = createAction('[Emission] Load');
export const loadEmissionsSuccess = createAction('[Emission] Load Success', props<{ remoteData: EmissionResponse }>());
export const loadEmissionsFailure = createAction('[Emission] Load Failure', props<{ error: HttpErrorResponse }>());
