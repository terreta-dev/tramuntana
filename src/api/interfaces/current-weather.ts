import { Coordinates } from './coordinates';
import { WeatherCondition } from './weather-condition';
import { WeatherParameters } from './weather-parameters';

export interface CurrentWeather {
  name: string;
  coordinates: Coordinates;
  weatherConditions: WeatherCondition[];
  weatherParameters: WeatherParameters;
  time: number;
  timezone: number;
  visibility: number;
  sunrise: number;
  sunset: number;
  country: string;
}
