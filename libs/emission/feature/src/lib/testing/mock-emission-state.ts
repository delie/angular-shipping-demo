import { HttpErrorResponse } from '@angular/common/http';
import { EmissionState } from '../interfaces/emission-state.interface';
import { mockEmissionResponse } from './mock-emission-response';

export const mockEmissionState: EmissionState = {
  emissions: {
    status: 'Success',
    value: mockEmissionResponse,
    error: new HttpErrorResponse({ error: 'Mock Error' }),
  },
};
