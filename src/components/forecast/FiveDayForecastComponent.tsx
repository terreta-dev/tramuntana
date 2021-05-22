import React, { useState, useEffect } from 'react';
import { getFiveDayForecast } from '../../api/clients/five-day-forecast';
import { FiveDayForecast } from '../../api/interfaces/five-day-forecast';
import { useAppState } from '../../contexts/appContext';
import { ForecastCard } from './ForecastCard';
import { Box } from 'grommet';

export const FiveDayForecastComponent: React.FC = () => {
  const [forecast, setForecast] = useState({} as FiveDayForecast);
  const { appId, cityName } = useAppState();

  useEffect(() => {
    if (cityName.length > 3) {
      getFiveDayForecast({ q: cityName, appId }).then(setForecast);
    }
  }, [appId, cityName]);

  return (
    <Box direction="row" align="center" justify="around" wrap={true}>
      {forecast &&
        forecast.forecasts &&
        forecast.forecasts.map((f, idx) => (
          <ForecastCard key={idx} forecast={f} />
        ))}
      {!forecast.forecasts && <span>No forecasts</span>}
    </Box>
  );
};
