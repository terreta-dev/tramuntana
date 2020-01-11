import React from 'react';
import { CurrentWeather } from '../../api/interfaces/current-weather';

export interface CurrentWeatherCardProps {
  currentWeather: CurrentWeather;
}

export const CurrentWeatherCard: React.FC<CurrentWeatherCardProps> = (
  props: CurrentWeatherCardProps
) => {
  return (
    <div>
      <pre>{JSON.stringify(props.currentWeather, null, 2)}</pre>
    </div>
  );
};
