import React, { useState, useEffect, FormEvent } from 'react';
import './App.css';
import { getCurrentWeather } from '../../api/clients/current-weather';
import { CurrentWeather } from '../../api/interfaces/current-weather';
import { getFiveDayForecast } from '../../api/clients/five-day-forecast';
import { FiveDayForecast } from '../../api/interfaces/five-day-forecast';

const App: React.FC = () => {
  const [cityName, setCityName] = useState('');
  const [weather, setWeather] = useState({} as CurrentWeather);
  const [cityNameForecast, setCityNameForecast] = useState('');
  const [forecast, setForecast] = useState({} as FiveDayForecast);

  useEffect(() => {
    if (cityName.length > 3) {
      getCurrentWeather({ q: cityName })
        .then(setWeather);
    }
  }, [cityName]);

  useEffect(() => {
    if (cityNameForecast.length > 3) {
      getFiveDayForecast({ q: cityNameForecast })
        .then(setForecast);
    }
  }, [cityNameForecast]);

  return (
    <div className="App">
      <div>
        <h3>Current weather</h3>
        <input type="text"
               placeholder="City"
               name="city-name"
               value={cityName}
               onChange={ (e: FormEvent<HTMLInputElement>) => setCityName(e.currentTarget.value) }
        />
        <button>Search weather</button>
        <div><pre>{ JSON.stringify(weather, null, 2) }</pre></div>
      </div>
      <div>
        <h3>5 day/3 h forecast</h3>
        <input type="text"
               placeholder="City"
               name="city-name"
               value={cityNameForecast}
               onChange={ (e: FormEvent<HTMLInputElement>) => setCityNameForecast(e.currentTarget.value)}
        />
        <button>Search weather</button>
        <div><pre>{ JSON.stringify(forecast, null, 2) }</pre></div>
      </div>
    </div>
  );
}

export default App;
