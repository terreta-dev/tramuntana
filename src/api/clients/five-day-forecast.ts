import { FiveDayForecast } from '../interfaces/five-day-forecast';
import { SearchParameters } from '../interfaces/search-parameters';
import { get } from './base';

export const getFiveDayForecast = async (
  params: SearchParameters
): Promise<FiveDayForecast> => get<FiveDayForecast>('forecast', { params });
