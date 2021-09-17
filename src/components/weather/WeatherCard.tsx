import React from "react";
import { Weather } from "../../api/interfaces/weather";

export interface WeatherCardProps {
  weather: Weather;
}

export const WeatherCard: React.FC<WeatherCardProps> = (
  props: WeatherCardProps
) => {
  return (
    <div>
      {!props.weather.weatherParameters && <div>No data</div>}
      {props.weather.weatherParameters && (
        <>
          <h3>Weather</h3>
          <div>
            <pre>{JSON.stringify(props.weather, null, 2)}</pre>
          </div>
        </>
      )}
    </div>
  );
};
