import React from 'react';
import { CurrentWeather } from '../../api/interfaces/current-weather';
import { Box } from 'grommet';
import WeatherParameterText from '../weather-parameter-text/WeatherParameterText';

export interface CurrentWeatherCardProps {
  currentWeather: CurrentWeather;
}

export const CurrentWeatherCard: React.FC<CurrentWeatherCardProps> = (
  props: CurrentWeatherCardProps
) => {
  return (
    <div>
      {!props.currentWeather.weatherParameters && <div>No data</div>}
      {props.currentWeather.weatherParameters && (
        <>
          <h3>Current weather</h3>
          <Box
            align="center"
            justify="around"
            pad={{ left: 'medium', right: 'small', vertical: 'small' }}
            elevation="large"
          >
            <WeatherParameterText
              parameterValue={
                props.currentWeather.weatherParameters.temperature
              }
              unit="K"
              label="Temperature:"
            />
            <WeatherParameterText
              parameterValue={props.currentWeather.weatherParameters.pressure}
              unit="hPa"
              label="Pressure:"
            />
            <WeatherParameterText
              parameterValue={props.currentWeather.weatherParameters.humidity}
              unit="%"
              label="Humidity:"
            />
            <WeatherParameterText
              parameterValue={
                props.currentWeather.weatherParameters.maxTemperature
              }
              unit="K"
              label="Max temperature:"
            />
            <WeatherParameterText
              parameterValue={
                props.currentWeather.weatherParameters.minTemperature
              }
              unit="K"
              label="Min. temperature:"
            />
            <WeatherParameterText
              parameterValue={props.currentWeather.weatherParameters.cloudiness}
              unit="%"
              label="Cloudiness:"
            />
            <WeatherParameterText
              parameterValue={props.currentWeather.weatherParameters.windSpeed}
              unit="km/h"
              label="Wind speed:"
            />
            <WeatherParameterText
              parameterValue={
                props.currentWeather.weatherParameters.windDirection
              }
              unit="km/h"
              label="Wind direction:"
            />
            <pre>{JSON.stringify(props.currentWeather, null, 2)}</pre>
          </Box>
        </>
      )}
    </div>
  );
};
