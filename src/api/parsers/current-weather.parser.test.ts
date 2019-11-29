import { parseCurrentWeather } from './current-weather.parser';

it('parses an api response correctly', () => {
  const apiJson = {
    "coord": {
      "lon": -122.08,
      "lat": 37.39
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 296.71,
      "pressure": 1013,
      "humidity": 53,
      "temp_min": 294.82,
      "temp_max": 298.71,
      "sea_level": 1004,
      "grnd_level": 987.4,
    },
    "visibility": 16093,
    "wind": {
      "speed": 1.5,
      "deg": 350
    },
    "clouds": {
      "all": 1
    },
    "rain": {
      "1h": 10,
    },
    "snow": {
      "1h": 20,
      "3h": 40,
    },
    "dt": 1560350645,
    "sys": {
      "type": 1,
      "id": 5122,
      "message": 0.0139,
      "country": "US",
      "sunrise": 1560343627,
      "sunset": 1560396563
    },
    "timezone": -25200,
    "id": 420006353,
    "name": "Mountain View",
    "cod": 200
  }
  const parseResult = parseCurrentWeather(apiJson);
  expect(parseResult).toBeDefined();
  expect(parseResult.coordinates).toBeDefined();
  expect(parseResult.coordinates.latitude).toBe(apiJson.coord.lat);
  expect(parseResult.coordinates.longitude).toBe(apiJson.coord.lon);
  expect(parseResult.name).toBe(apiJson.name);
  expect(parseResult.timezone).toBe(apiJson.timezone);
  expect(parseResult.time).toBe(apiJson.dt);
  expect(parseResult.visibility).toBe(apiJson.visibility);
  expect(parseResult.sunrise).toBe(apiJson.sys.sunrise);
  expect(parseResult.sunset).toBe(apiJson.sys.sunset);
  expect(parseResult.country).toBe(apiJson.sys.country);
  expect(parseResult.weatherConditions).toBe(apiJson.weather);
  expect(parseResult.weatherParameters.temperature).toBe(apiJson.main.temp);
  expect(parseResult.weatherParameters.pressure).toBe(apiJson.main.pressure);
  expect(parseResult.weatherParameters.humidity).toBe(apiJson.main.humidity);
  expect(parseResult.weatherParameters.maxTemperature).toBe(apiJson.main.temp_max);
  expect(parseResult.weatherParameters.minTemperature).toBe(apiJson.main.temp_min);
  expect(parseResult.weatherParameters.pressureAtSeaLevel).toBe(apiJson.main.sea_level);
  expect(parseResult.weatherParameters.pressureAtGroundLevel).toBe(apiJson.main.grnd_level)
  expect(parseResult.weatherParameters.windSpeed).toBe(apiJson.wind.speed);
  expect(parseResult.weatherParameters.windDirection).toBe(apiJson.wind.deg);
  expect(parseResult.weatherParameters.cloudiness).toBe(apiJson.clouds.all);
  expect(parseResult.weatherParameters.rainInLastHour).toBe(apiJson.rain['1h']);
  expect(parseResult.weatherParameters.rainInLastThreeHours).toBe(undefined);
  expect(parseResult.weatherParameters.snowInLastHour).toBe(apiJson.snow['1h']);
  expect(parseResult.weatherParameters.snowInLastThreeHours).toBe(apiJson.snow['3h']);
});
