import { useEffect } from "react";
import { getWeather } from "../../common/api/clients/weather";
import { Weather } from "../../common/api/interfaces/weather";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectApiKey, selectCity } from "../../features/api-data/apiDataSlice";
import { changeWeather } from "./currentWeatherSlice";
import CurrentWeather from "./CurrentWeather";

const WeatherFetcher = () => {
  const city = useAppSelector(selectCity);
  const appId = useAppSelector(selectApiKey);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (city?.length > 0 && appId?.length > 0) {
      getWeather({ q: city, appId }).then((w: Weather) =>
        dispatch(changeWeather(w))
      );
    }
  }, [appId, city, dispatch]);

  return <CurrentWeather />;
};

export default WeatherFetcher;
