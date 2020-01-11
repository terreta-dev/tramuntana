import React, { useState, useEffect } from 'react';

import { getCurrentWeather } from '../../api/clients/current-weather';
import { CurrentWeather } from '../../api/interfaces/current-weather';
import { useAppState } from '../../contexts/appContext';
import { CurrentWeatherCard } from './CurrentWeatherCard';

export const CurrentWeatherComponent: React.FC = () => {
  const [weather, setWeather] = useState({} as CurrentWeather);
  const { appId, cityName } = useAppState();

  useEffect(() => {
    if (cityName.length > 3) {
      getCurrentWeather({ q: cityName, appId }).then(setWeather);
    }
  }, [appId, cityName]);

  return <CurrentWeatherCard currentWeather={weather} />;
};
