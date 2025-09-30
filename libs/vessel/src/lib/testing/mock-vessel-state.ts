import { VesselState } from '../interfaces/vessel-state.interface';
import { mockVesselResponse } from './mock-vessel-response';

export const mockVesselState: VesselState = {
  data: {
    status: 'Success',
    value: mockVesselResponse,
  },
};
