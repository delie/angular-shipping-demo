import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { VesselResponse } from '../types/vessel-response.type';

export const loadVessels = createAction('[Vessel] Load');
export const loadVesselsSuccess = createAction('[Vessel] Load Success', props<{ remoteData: VesselResponse }>());
export const loadVesselsFailure = createAction('[Vessel] Load Failure', props<{ error: HttpErrorResponse }>());
