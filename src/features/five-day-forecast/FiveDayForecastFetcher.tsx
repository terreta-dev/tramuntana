import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getFiveDayForecast } from "../../common/api/clients/five-day-forecast";
import { FiveDayForecast } from "../../common/api/interfaces/five-day-forecast";
import { selectApiKey } from "../api-data/apiDataSlice";
import { selectCoordinates } from "../current-weather/currentWeatherSlice";
import FiveDayForecastDashboard from "./FiveDayForecastDashboard";
import { changeForecast } from "./fiveDayForecastSlice";

const FiveDayForecastFetcher = () => {
  const coordinates = useAppSelector(selectCoordinates);
  const appId = useAppSelector(selectApiKey);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!!coordinates && appId?.length > 0) {
      getFiveDayForecast({
        lat: coordinates.latitude,
        lon: coordinates.longitude,
        appId,
      }).then((f: FiveDayForecast) => dispatch(changeForecast(f)));
    }
  }, [appId, coordinates, dispatch]);

  return <FiveDayForecastDashboard />;
};

export default FiveDayForecastFetcher;
