import { parseFiveDayForecast } from "./five-day-forecast.parser";
import { Forecast } from "../interfaces/forecast";

it("parses an api response correctly", () => {
  const parseResult = parseFiveDayForecast(apiJson);
  expect(parseResult).toBeDefined();
  expect(parseResult.coordinates).toBeDefined();
  expect(parseResult.coordinates.latitude).toBe(apiJson.lat);
  expect(parseResult.coordinates.longitude).toBe(apiJson.lon);
  expect(parseResult.forecasts).toHaveLength(apiJson.daily.length);
  checkItem(apiJson.daily[0], parseResult.forecasts[0]);
});

const checkItem = (origin: any, target: Forecast): void => {
  expect(target.temperature.real.max).toBe(origin.temp.max);
  expect(target.temperature.real.min).toBe(origin.temp.min);
  expect(target.temperature.feelsLike.day).toBe(origin.feels_like.day);
  expect(target.temperature.feelsLike.night).toBe(origin.feels_like.night);
  expect(target.pressure).toBe(origin.pressure);
  expect(target.humidity).toBe(origin.humidity);
  expect(target.cloudiness).toBe(origin.clouds);
  expect(target.windSpeed).toBe(origin.speed);
  expect(target.windDirection).toBe(origin.deg);
  expect(target.rain).toBe(origin.rain);
  expect(target.snow).toBe(origin.snow);
  expect(target.rainProbability).toBe(origin.pop);
  expect(target.sunrise).toBe(origin.sunrise);
  expect(target.sunset).toBe(origin.sunset);
  expect(target.moonrise).toBe(origin.moonrise);
  expect(target.moonset).toBe(origin.moonset);
  expect(target.weatherConditions).toHaveLength(origin.weather.length);
  expect(target.time).toBe(origin.dt);
};

const apiJson = {
  lat: 52.5244,
  lon: 13.4105,
  timezone: "Europe/Berlin",
  timezone_offset: 3600,
  daily: [
    {
      dt: 1644058800,
      sunrise: 1644043308,
      sunset: 1644076734,
      moonrise: 1644050700,
      moonset: 1644096360,
      moon_phase: 0.15,
      temp: {
        day: 5.7,
        min: 2.69,
        max: 6.2,
        night: 4.36,
        eve: 5.43,
        morn: 4.2,
      },
      feels_like: { day: 1.27, night: -0.3, eve: 1.3, morn: -0.59 },
      pressure: 1015,
      humidity: 67,
      dew_point: 0.14,
      wind_speed: 8.47,
      wind_deg: 277,
      wind_gust: 15.63,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: 58,
      pop: 0.8,
      rain: 0.45,
      uvi: 0.82,
    },
    {
      dt: 1644145200,
      sunrise: 1644129604,
      sunset: 1644163249,
      moonrise: 1644137880,
      moonset: 1644187260,
      moon_phase: 0.18,
      temp: {
        day: 6.1,
        min: 3.63,
        max: 6.1,
        night: 4.29,
        eve: 4.52,
        morn: 4.72,
      },
      feels_like: { day: 1.88, night: -0.52, eve: -0.67, morn: -0.09 },
      pressure: 1001,
      humidity: 89,
      dew_point: 4.34,
      wind_speed: 9.9,
      wind_deg: 304,
      wind_gust: 21.35,
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10d" },
      ],
      clouds: 100,
      pop: 1,
      rain: 10.72,
      uvi: 0.06,
    },
    {
      dt: 1644231600,
      sunrise: 1644215898,
      sunset: 1644249764,
      moonrise: 1644225060,
      moonset: 0,
      moon_phase: 0.21,
      temp: {
        day: 4.46,
        min: 1.94,
        max: 4.99,
        night: 2.37,
        eve: 3.71,
        morn: 2,
      },
      feels_like: { day: -0.69, night: -2.69, eve: -1.59, morn: -3.36 },
      pressure: 1010,
      humidity: 69,
      dew_point: -0.83,
      wind_speed: 9.01,
      wind_deg: 296,
      wind_gust: 16.79,
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      clouds: 55,
      pop: 0.61,
      uvi: 0.4,
    },
    {
      dt: 1644318000,
      sunrise: 1644302190,
      sunset: 1644336279,
      moonrise: 1644312360,
      moonset: 1644278040,
      moon_phase: 0.25,
      temp: {
        day: 6.43,
        min: 1.26,
        max: 7.7,
        night: 7.7,
        eve: 7.53,
        morn: 1.85,
      },
      feels_like: { day: 2.74, night: 4.3, eve: 4.1, morn: -2.52 },
      pressure: 1023,
      humidity: 88,
      dew_point: 4.55,
      wind_speed: 6.43,
      wind_deg: 263,
      wind_gust: 14.47,
      weather: [
        { id: 616, main: "Snow", description: "rain and snow", icon: "13d" },
      ],
      clouds: 100,
      pop: 0.2,
      rain: 0.18,
      snow: 0.26,
      uvi: 0.25,
    },
    {
      dt: 1644404400,
      sunrise: 1644388481,
      sunset: 1644422794,
      moonrise: 1644399840,
      moonset: 1644368820,
      moon_phase: 0.28,
      temp: {
        day: 8.86,
        min: 7.54,
        max: 9.45,
        night: 8.11,
        eve: 8.72,
        morn: 7.54,
      },
      feels_like: { day: 6.08, night: 5.86, eve: 6.32, morn: 4.57 },
      pressure: 1024,
      humidity: 77,
      dew_point: 5,
      wind_speed: 5.58,
      wind_deg: 263,
      wind_gust: 11.9,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: 100,
      pop: 0,
      uvi: 0.99,
    },
    {
      dt: 1644490800,
      sunrise: 1644474770,
      sunset: 1644509309,
      moonrise: 1644487680,
      moonset: 1644459540,
      moon_phase: 0.31,
      temp: {
        day: 5.17,
        min: 2.9,
        max: 7.57,
        night: 2.9,
        eve: 4.4,
        morn: 5.66,
      },
      feels_like: { day: 1.37, night: -1.8, eve: 0.24, morn: 2.5 },
      pressure: 1018,
      humidity: 91,
      dew_point: 3.78,
      wind_speed: 6.07,
      wind_deg: 271,
      wind_gust: 12.84,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: 96,
      pop: 0.39,
      rain: 0.8,
      uvi: 1,
    },
    {
      dt: 1644577200,
      sunrise: 1644561057,
      sunset: 1644595824,
      moonrise: 1644576000,
      moonset: 1644549960,
      moon_phase: 0.34,
      temp: {
        day: 4.38,
        min: -0.29,
        max: 4.38,
        night: -0.29,
        eve: 1.3,
        morn: 0.31,
      },
      feels_like: { day: -0.21, night: -5.57, eve: -3.36, morn: -4.31 },
      pressure: 1018,
      humidity: 68,
      dew_point: -1.07,
      wind_speed: 6.79,
      wind_deg: 248,
      wind_gust: 13.25,
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      ],
      clouds: 36,
      pop: 0.88,
      snow: 1.19,
      uvi: 1,
    },
    {
      dt: 1644663600,
      sunrise: 1644647343,
      sunset: 1644682339,
      moonrise: 1644664920,
      moonset: 1644640080,
      moon_phase: 0.37,
      temp: {
        day: 3.38,
        min: -1.38,
        max: 3.38,
        night: 1.68,
        eve: 1.4,
        morn: -1.28,
      },
      feels_like: { day: -0.34, night: -3.22, eve: -3.06, morn: -5.91 },
      pressure: 1029,
      humidity: 53,
      dew_point: -5.31,
      wind_speed: 5.79,
      wind_deg: 193,
      wind_gust: 11.72,
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      clouds: 53,
      pop: 0,
      uvi: 1,
    },
  ],
};
