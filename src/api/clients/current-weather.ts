import { CurrentWeather } from '../interfaces/current-weather';
import { SearchParameters } from '../interfaces/search-parameters';
import { get } from './base';
import { parseCurrentWeather } from '../parsers/current-weather.parser';

export const getCurrentWeather = async (
  params: SearchParameters
): Promise<CurrentWeather> => {
  const data = await get('weather', { params });
  return parseCurrentWeather(data);
};
