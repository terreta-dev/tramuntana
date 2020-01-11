import React, { useState, FormEvent, useEffect } from 'react';

import { getCurrentWeather } from '../../api/clients/current-weather';
import { CurrentWeather } from '../../api/interfaces/current-weather';
import { useAppState } from '../../contexts/appContext';

export const CurrentWeatherComponent: React.FC = () => {
  const [cityName, setCityName] = useState('');
  const [weather, setWeather] = useState({} as CurrentWeather);
  const { appId } = useAppState();

  useEffect(() => {
    if (cityName.length > 3) {
      getCurrentWeather({ q: cityName, appId }).then(setWeather);
    }
  }, [appId, cityName]);

  return (
    <div>
      <h3>Current weather</h3>
      <input
        type="text"
        placeholder="City"
        name="city-name"
        value={cityName}
        onChange={(e: FormEvent<HTMLInputElement>) =>
          setCityName(e.currentTarget.value)
        }
      />
      <div>
        <pre>{JSON.stringify(weather, null, 2)}</pre>
      </div>
    </div>
  );
};
