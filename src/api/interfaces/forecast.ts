import { WeatherCondition } from './weather-condition';
import { WeatherParameters } from './weather-parameters';

export interface Forecast {
  time: number;
  weatherConditions: WeatherCondition[];
  weatherParameters: WeatherParameters;
  calculationTime: string;
}
