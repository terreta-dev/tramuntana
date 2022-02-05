import { Forecast } from "./forecast";
import { Coordinates } from "./coordinates";

export interface FiveDayForecast {
  coordinates: Coordinates;
  timezone: number;
  forecasts: Forecast[];
}
