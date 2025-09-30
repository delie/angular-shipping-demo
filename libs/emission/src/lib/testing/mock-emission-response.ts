import { EmissionData } from '../interfaces/emission-data.interface';
import { EmissionResponse } from '../types/emission-reponse.type';

export const mockEmissionData1: EmissionData = {
  id: 100,
  timeSeries: [
    {
      report_from_utc: '2025-01-01T00:00:00Z',
      report_to_utc: '2025-01-02T00:00:00Z',
      co2_emissions: 1,
      sox_emissions: 2,
      nox_emissions: 3,
      pm_emissions: 4,
      ch4_emissions: 5,
    },
  ],
};

export const mockEmissionData2: EmissionData = {
  id: 200,
  timeSeries: [
    {
      report_from_utc: '2025-02-01T00:00:00Z',
      report_to_utc: '2025-02-02T00:00:00Z',
      co2_emissions: 10,
      sox_emissions: 20,
      nox_emissions: 30,
      pm_emissions: 40,
      ch4_emissions: 50,
    },
  ],
};

export const mockEmissionResponse: EmissionResponse = [
  mockEmissionData1,
  mockEmissionData2,
];
