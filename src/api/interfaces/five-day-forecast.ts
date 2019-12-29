import { Forecast } from './forecast';

export interface FiveDayForecast {
  name: string;
  coordinates: Coordinates;
  country: string;
  forecasts: Forecast[];
}
