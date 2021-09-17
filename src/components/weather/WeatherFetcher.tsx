import { useState, useEffect } from "react";

import { getWeather } from "../../api/clients/weather";
import { Weather } from "../../api/interfaces/weather";
import { useAppState } from "../../contexts/appContext";
import { WeatherCard } from "./WeatherCard";

const WeatherFetcher = () => {
  const [weather, setWeather] = useState({} as Weather);
  const { appId, city } = useAppState();

  useEffect(() => {
    getWeather({ q: city, appId }).then(setWeather);
  }, [appId, city]);

  return <WeatherCard weather={weather} />;
};

export default WeatherFetcher;
