import React from 'react';

import { Header } from '../header/header';
import { CurrentWeatherComponent } from '../currentWeather/currentWeather';
import { ForecastWeathercomponent } from '../forecastWeather/forecastWeather';

export const Home: React.FC = () => {
  return (
    <div className="Home">
      <Header />
      <CurrentWeatherComponent />
      <ForecastWeathercomponent />
    </div>
  );
};
