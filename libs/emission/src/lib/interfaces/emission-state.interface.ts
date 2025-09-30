import { RequestStatus } from '@app/core';
import { EmissionResponse } from '../types/emission-reponse.type';

export interface EmissionState {
  data: {
    status: RequestStatus;
    value: EmissionResponse | null;
  };
}
