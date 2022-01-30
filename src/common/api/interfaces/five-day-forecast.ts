import { Forecast } from "./forecast";
import { Coordinates } from "./coordinates";

export interface FiveDayForecast {
  name: string;
  coordinates: Coordinates;
  country: string;
  forecasts: Forecast[];
}
