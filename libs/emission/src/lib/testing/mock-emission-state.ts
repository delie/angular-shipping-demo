import { EmissionState } from '../interfaces/emission-state.interface';
import { mockEmissionResponse } from './mock-emission-response';

export const mockEmissionState: EmissionState = {
  data: {
    status: 'Success',
    value: mockEmissionResponse,
  },
};
