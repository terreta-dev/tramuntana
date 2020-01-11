import React from 'react';
import { Header } from '../header/Header';
import { CurrentWeatherComponent } from '../current-weather/CurrentWeatherComponent';
import { FiveDayForecastComponent } from '../forecast/FiveDayForecastComponent';
import { Box } from 'grommet';

export const Home: React.FC = () => {
  return (
    <div className="Home">
      <Header />
      <Box direction="row" align="start" justify="around">
        <CurrentWeatherComponent />
        <FiveDayForecastComponent />
      </Box>
    </div>
  );
};
