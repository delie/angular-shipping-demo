import { HttpErrorResponse } from '@angular/common/http';
import { RequestStatus } from '@app/core';
import { EmissionData } from './emission-data.interface';

export interface EmissionState {
  emissions: {
    value: EmissionData[];
    status: RequestStatus;
    error?: HttpErrorResponse;
  };
}
