import React from 'react';
import { Forecast } from '../../api/interfaces/forecast';
import { Box } from 'grommet';
import WeatherParameterText from '../weather-parameter-text/WeatherParameterText';

export interface ForecastCardProps {
  forecast: Forecast;
}

export const ForecastCard: React.FC<ForecastCardProps> = (
  props: ForecastCardProps
) => {
  return (
    <div>
      {!props.forecast.weatherParameters && <div>No data</div>}
      {props.forecast.weatherParameters && (
        <>
          <h3>Forecast</h3>
          <Box
            align="center"
            justify="around"
            pad={{ left: 'medium', right: 'small', vertical: 'small' }}
            elevation="large"
          >
            <WeatherParameterText
              parameterValue={props.forecast.weatherParameters.temperature}
              unit="K"
              label="Temperature:"
            />
            <WeatherParameterText
              parameterValue={props.forecast.weatherParameters.pressure}
              unit="hPa"
              label="Pressure:"
            />
            <WeatherParameterText
              parameterValue={props.forecast.weatherParameters.humidity}
              unit="%"
              label="Humidity:"
            />
            <WeatherParameterText
              parameterValue={props.forecast.weatherParameters.maxTemperature}
              unit="K"
              label="Max temperature:"
            />
            <WeatherParameterText
              parameterValue={props.forecast.weatherParameters.minTemperature}
              unit="K"
              label="Min. temperature:"
            />
            <WeatherParameterText
              parameterValue={props.forecast.weatherParameters.cloudiness}
              unit="%"
              label="Cloudiness:"
            />
            <WeatherParameterText
              parameterValue={props.forecast.weatherParameters.windSpeed}
              unit="km/h"
              label="Wind speed:"
            />
            <WeatherParameterText
              parameterValue={props.forecast.weatherParameters.windDirection}
              unit="km/h"
              label="Wind direction:"
            />
            <pre>{JSON.stringify(props.forecast, null, 2)}</pre>
          </Box>
        </>
      )}
    </div>
  );
};
