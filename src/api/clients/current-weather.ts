import { CurrentWeather } from '../interfaces/current-weather';
import { SearchParameters } from '../interfaces/search-parameters';
import { get } from './base';

export const getCurrentWeather = async (
  params: SearchParameters
): Promise<CurrentWeather> => get<CurrentWeather>('weather', { params });
