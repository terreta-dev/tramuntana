import styled from "@emotion/styled/macro";
import React, { useState, useEffect } from "react";
import { getFiveDayForecast } from "../../api/clients/five-day-forecast";
import { FiveDayForecast } from "../../api/interfaces/five-day-forecast";
import { useAppState } from "../../contexts/appContext";
import { ForecastCard } from "./ForecastCard";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
`;
export const FiveDayForecastFetcher: React.FC = () => {
  const [forecast, setForecast] = useState({} as FiveDayForecast);
  const { appId, city } = useAppState();

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
