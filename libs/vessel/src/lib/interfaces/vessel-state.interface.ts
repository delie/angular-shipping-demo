import { HttpErrorResponse } from '@angular/common/http';
import { RequestStatus } from '@app/core';
import { VesselData } from './vessel-data.interface';

export interface VesselState {
  vessels: {
    value: VesselData[];
    status: RequestStatus;
    error?: HttpErrorResponse;
  };
}
