import styled from "@emotion/styled/macro";
import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { getFiveDayForecast } from "../../common/api/clients/five-day-forecast";
import { FiveDayForecast } from "../../common/api/interfaces/five-day-forecast";
import { selectApiKey, selectCity } from "../../features/api-data/apiDataSlice";
import { ForecastCard } from "./ForecastCard";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
`;
export const FiveDayForecastFetcher: React.FC = () => {
    const [forecast, setForecast] = useState({} as FiveDayForecast);
    const city = useAppSelector(selectCity);
    const appId = useAppSelector(selectApiKey)

  useEffect(() => {
    if (city.length > 3) {
      getFiveDayForecast({ q: city, appId }).then(setForecast);
    }
  }, [appId, city]);

  return (
    <GridContainer>
      {forecast &&
        forecast.forecasts &&
        forecast.forecasts.map((f, idx) => (
          <ForecastCard key={idx} forecast={f} />
        ))}
      {!forecast.forecasts && <span>No forecasts</span>}
    </GridContainer>
  );
};
