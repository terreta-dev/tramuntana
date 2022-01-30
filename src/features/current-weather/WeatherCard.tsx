import styled from "@emotion/styled";
import React from "react";
import { Weather } from "../../common/api/interfaces/weather";
import { toLocalTime } from "../../common/utils/to-locale-time";
import WeatherIcon, { getWeatherIcon } from "../../common/components/icon/WeatherIcon";
import WeatherIconLabel from "../../common/components/WeatherIconLabel";

const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    "icon  temperature"
    "vars1 vars2";
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  border: 1px solid ${({ theme }) => theme.color.secondaryBackground};
  border-radius: 10px;
  padding: 10px;
`;

const GridDiv = styled.div<{ zone: string }>`
  grid-area: ${({ zone }) => zone};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

interface WeatherCardProps {
  weather: Weather;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({
  weather,
}: WeatherCardProps) => {
  return (
    <>
      <GridContainer>
        <div>Current Weather</div>
        <GridDiv zone="icon">
          <WeatherIcon
            name={getWeatherIcon(weather.weatherConditions[0].icon)}
            size="6em"
          />
        </GridDiv>
        <GridDiv zone="temperature">
          <WeatherIconLabel
            name="WiThermometer"
            text={Math.round(weather.weatherParameters.temperature)}
            unit="ºC"
          />
          <WeatherIconLabel
            name="WiDirectionUp"
            text={Math.round(weather.weatherParameters.maxTemperature)}
            unit="ºC"
          />
          <WeatherIconLabel
            name="WiDirectionDown"
            text={Math.round(weather.weatherParameters.minTemperature)}
            unit="ºC"
          />
        </GridDiv>
        <GridDiv zone="vars1">
          <WeatherIconLabel
            name="WiBarometer"
            text={weather.weatherParameters.pressure}
            unit="hPa"
          />
          <WeatherIconLabel
            name="WiHumidity"
            text={weather.weatherParameters.humidity}
            unit="%"
          />
        </GridDiv>
        <GridDiv zone="vars2">
          <WeatherIconLabel
            name="WiSunrise"
            text={toLocalTime(weather.sunrise, weather.timezone)}
          />
          <WeatherIconLabel
            name="WiSunset"
            text={toLocalTime(weather.sunset, weather.timezone)}
          />
        </GridDiv>
      </GridContainer>
    </>
  );
};