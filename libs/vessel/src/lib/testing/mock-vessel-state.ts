import { HttpErrorResponse } from '@angular/common/http';
import { VesselState } from '../interfaces/vessel-state.interface';
import { mockVesselResponse } from './mock-vessel-response';

export const mockVesselState: VesselState = {
  vessels: {
    status: 'Success',
    value: mockVesselResponse,
    error: new HttpErrorResponse({ error: 'Error' }),
  },
};
