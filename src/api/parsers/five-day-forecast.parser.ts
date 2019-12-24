import { FiveDayForecast } from '../interfaces/five-day-forecast';
import { Forecast } from '../interfaces/forecast';
import { genericParse } from './generic.parser';

export const fiveDayForecastFieldMap = {
  'city.coord.lon': 'coordinates.longitude',
  'city.coord.lat': 'coordinates.latitude',
  'city.country': 'country',
  'city.name': 'name',
};

export const forecastFieldMap = {
  'weather': 'weatherConditions',
  'main.temp': 'weatherParameters.temperature',
  'main.pressure': 'weatherParameters.pressure',
  'main.humidity': 'weatherParameters.humidity',
  'main.temp_min': 'weatherParameters.minTemperature',
  'main.temp_max': 'weatherParameters.maxTemperature',
  'main.sea_level': 'weatherParameters.pressureAtSeaLevel',
  'main.grnd_level': 'weatherParameters.pressureAtGroundLevel',
  'wind.speed': 'weatherParameters.windSpeed',
  'wind.deg': 'weatherParameters.windDirection',
  'clouds.all': 'weatherParameters.cloudiness',
  'rain.3h': 'weatherParameters.rainInLastThreeHours',
  'snow.3h': 'weatherParameters.snowInLastThreeHours',
  'dt': 'time',
  'dt_txt': 'calculationTime',
};

export const parseFiveDayForecast = (apiJson: any): FiveDayForecast => {
  const parse = genericParse<FiveDayForecast>(apiJson, fiveDayForecastFieldMap);
  parse.forecasts = apiJson['list'].map(parseForecast);
  return parse;
};

export const parseForecast = (apiJson: any): Forecast =>
  genericParse<Forecast>(apiJson, forecastFieldMap);
