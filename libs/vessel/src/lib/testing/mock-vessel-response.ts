import { VesselData } from '../interfaces/vessel-data.interface';
import { VesselResponse } from '../types/vessel-response.type';

export const mockVesselData1: VesselData = {
  id: 100,
  name: 'Vessel 1',
  mmsi: 123456789,
  imo: 9876543,
  companyId: 1,
  companyName: 'Shipping Co 1',
  startDate: '2025-01-01T00:00:00Z',
  active: true,
  vesselType: 'Cargo',
};

export const mockVesselData2: VesselData = {
  id: 200,
  name: 'Vessel 2',
  mmsi: 987654321,
  imo: 1234567,
  companyId: 2,
  companyName: 'Shipping Co 2',
  startDate: '2020-02-02T00:00:00Z',
  active: true,
  vesselType: 'Cargo',
};

export const mockVesselData3: VesselData = {
  id: 300,
  name: 'Vessel 3',
  mmsi: 192837465,
  imo: 5647382,
  companyId: 2,
  companyName: 'Shipping Co 2',
  startDate: '2025-03-03T00:00:00Z',
  active: false,
  vesselType: 'Tanker',
};

export const mockVesselResponse: VesselResponse = [
  mockVesselData1,
  mockVesselData2,
  mockVesselData3,
];
