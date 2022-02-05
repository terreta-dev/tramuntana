import { WeatherCondition } from "./weather-condition";

export interface TemperatureRange {
  min: number;
  max: number;
}

export interface FeelsLikeRange {
  day: number;
  night: number;
}

export interface ForecastTemperature {
  real: TemperatureRange;
  feelsLike: FeelsLikeRange;
}

export interface Forecast {
  weatherConditions: WeatherCondition[];
  temperature: ForecastTemperature;
  pressure: number;
  humidity: number;
  windSpeed: number;
  windDirection: number;
  cloudiness: number;
  rain?: number;
  snow?: number;
  rainProbability: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  time: number;
}
