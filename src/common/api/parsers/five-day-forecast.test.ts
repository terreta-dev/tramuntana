import { parseFiveDayForecast } from "./five-day-forecast.parser";
import { Forecast } from "../interfaces/forecast";

it("parses an api response correctly", () => {
  const apiJson = {
    cod: "200",
    message: 0.0032,
    cnt: 36,
    list: [
      {
        dt: 1487624400,
        main: {
          temp: 272.424,
          temp_min: 272.424,
          temp_max: 272.424,
          pressure: 968.38,
          sea_level: 1043.17,
          grnd_level: 968.38,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
        ],
        clouds: { all: 20 },
        wind: { speed: 3.57, deg: 255.503 },
        rain: {},
        snow: {},
        sys: { pod: "n" },
        dt_txt: "2017-02-20 21:00:00",
      },
    ],
    city: {
      id: 6940463,
      name: "Altstadt",
      coord: { lat: 48.137, lon: 11.5752 },
      country: "none",
    },
  };
  const parseResult = parseFiveDayForecast(apiJson);
  expect(parseResult).toBeDefined();
  expect(parseResult.coordinates).toBeDefined();
  expect(parseResult.coordinates.latitude).toBe(apiJson.city.coord.lat);
  expect(parseResult.coordinates.longitude).toBe(apiJson.city.coord.lon);
  expect(parseResult.country).toBe(apiJson.city.country);
  expect(parseResult.forecasts).toHaveLength(1);
  checkItem(apiJson.list[0], parseResult.forecasts[0]);
});

const checkItem = (origin: any, target: Forecast): void => {
  expect(target.weatherParameters.temperature).toBe(origin.main.temp);
  expect(target.weatherParameters.pressure).toBe(origin.main.pressure);
  expect(target.weatherParameters.humidity).toBe(origin.main.humidity);
  expect(target.weatherParameters.maxTemperature).toBe(origin.main.temp_max);
  expect(target.weatherParameters.minTemperature).toBe(origin.main.temp_min);
  expect(target.weatherParameters.pressureAtSeaLevel).toBe(
    origin.main.sea_level
  );
  expect(target.weatherParameters.pressureAtGroundLevel).toBe(
    origin.main.grnd_level
  );
  expect(target.weatherParameters.windSpeed).toBe(origin.wind.speed);
  expect(target.weatherParameters.windDirection).toBe(origin.wind.deg);
  expect(target.weatherParameters.cloudiness).toBe(origin.clouds.all);
  expect(target.weatherParameters.rainInLastThreeHours).toBe(undefined);
  expect(target.weatherParameters.snowInLastThreeHours).toBe(undefined);
  expect(target.weatherConditions).toHaveLength(1);
  expect(target.time).toBe(origin.dt);
  expect(target.calculationTime).toBe(origin.dt_txt);
};
