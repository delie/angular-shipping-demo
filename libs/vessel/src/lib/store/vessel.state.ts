import { VesselState } from '../interfaces/vessel-state.interface';

export const vesselStateKey = 'vessel';

export const initialVesselState: VesselState = {
  data: {
    status: null,
    value: null,
  },
};
