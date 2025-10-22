import { TimeSeriesData } from './time-series-data.interface';

export interface EmissionData {
  id: number;
  timeSeries: TimeSeriesData[];
}
