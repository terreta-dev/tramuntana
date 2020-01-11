import React, { useState, useEffect, FormEvent } from 'react';
import { getFiveDayForecast } from '../../api/clients/five-day-forecast';
import { FiveDayForecast } from '../../api/interfaces/five-day-forecast';
import { useAppState } from '../../contexts/appContext';

export const ForecastWeathercomponent: React.FC = () => {
  const [cityNameForecast, setCityNameForecast] = useState('');
  const [forecast, setForecast] = useState({} as FiveDayForecast);
  const { appId } = useAppState();

  useEffect(() => {
    if (cityNameForecast.length > 3) {
      getFiveDayForecast({ q: cityNameForecast, appId }).then(setForecast);
    }
  }, [appId, cityNameForecast]);

  return (
    <div>
      <h3>5 day/3 h forecast</h3>
      <input
        type="text"
        placeholder="City"
        name="city-name"
        value={cityNameForecast}
        onChange={(e: FormEvent<HTMLInputElement>) =>
          setCityNameForecast(e.currentTarget.value)
        }
      />
      <div>
        <pre>{JSON.stringify(forecast, null, 2)}</pre>
      </div>
    </div>
  );
};
