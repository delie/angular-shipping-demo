import { RequestStatus } from '@demo/core';
import { VesselResponse } from '../types/vessel-response.type';

export interface VesselState {
  data: {
    status: RequestStatus;
    value: VesselResponse | null;
  };
}
