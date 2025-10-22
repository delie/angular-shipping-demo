import { VesselState } from '../interfaces/vessel-state.interface';

export const vesselStateKey = 'vessel';

export const initialVesselState: VesselState = {
  vessels: {
    value: [],
    status: null,
  },
};
