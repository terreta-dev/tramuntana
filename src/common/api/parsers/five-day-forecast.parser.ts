import { FiveDayForecast } from "../interfaces/five-day-forecast";
import { Forecast } from "../interfaces/forecast";
import { genericParse } from "./generic.parser";

export const fiveDayForecastFieldMap = {
  lon: "coordinates.longitude",
  lat: "coordinates.latitude",
  timezone_offset: "timezone",
};

export const forecastFieldMap = {
  weather: "weatherConditions",
  "temp.min": "temperature.real.min",
  "temp.max": "temperature.real.max",
  "feels_like.day": "temperature.feelsLike.day",
  "feels_like.night": "temperature.feelsLike.night",
  pressure: "pressure",
  humidity: "humidity",
  speed: "windSpeed",
  deg: "windDirection",
  clouds: "cloudiness",
  rain: "rain",
  snow: "snow",
  pop: "rainProbability",
  sunrise: "sunrise",
  sunset: "sunset",
  moonrise: "moonrise",
  moonset: "moonset",
  dt: "time",
};

export const parseFiveDayForecast = (apiJson: any): FiveDayForecast => {
  const parse = genericParse<FiveDayForecast>(apiJson, fiveDayForecastFieldMap);
  parse.forecasts = apiJson["daily"].map(parseForecast);
  return parse;
};

export const parseForecast = (apiJson: any): Forecast =>
  genericParse<Forecast>(apiJson, forecastFieldMap);
