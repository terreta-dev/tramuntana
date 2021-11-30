import styled from "@emotion/styled";
import React from "react";
import { Weather } from "../../api/interfaces/weather";
import WeatherIcon, { getWeatherIcon } from "../icon/WeatherIcon";
import Label from "./Label";

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

const InnerIcon = styled(WeatherIcon)`
  grid-area: icon;
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

const toLocalTime = (
  secondsSinceEpoch: number,
  timezoneSeconds: number
): string => {
  const isoDate = new Date(
    1000 * (secondsSinceEpoch + (timezoneSeconds ? timezoneSeconds : 0))
  ).toISOString();
  return isoDate.match(/[0-2]\d:[0-5]\d:?([0-5]\d)/)?.[0] ?? "N/A";
};

export const WeatherCard: React.FC<WeatherCardProps> = ({
  weather,
}: WeatherCardProps) => {
  return (
    <GridContainer>
      <GridDiv zone="icon">
        <WeatherIcon
          name={getWeatherIcon(weather.weatherConditions[0].icon)}
          size="6em"
        />
      </GridDiv>
      <GridDiv zone="temperature">
        <Label
          name="WiThermometer"
          text={weather.weatherParameters.temperature}
          unit="ºC"
        />
        <Label
          name="WiDirectionUp"
          text={weather.weatherParameters.maxTemperature}
          unit="ºC"
        />
        <Label
          name="WiDirectionDown"
          text={weather.weatherParameters.minTemperature}
          unit="ºC"
        />
      </GridDiv>
      <GridDiv zone="vars1">
        <Label
          name="WiBarometer"
          text={weather.weatherParameters.pressure}
          unit="hPa"
        />
        <Label
          name="WiHumidity"
          text={weather.weatherParameters.humidity}
          unit="%"
        />
      </GridDiv>
      <GridDiv zone="vars2">
        <Label
          name="WiSunrise"
          text={toLocalTime(weather.sunrise, weather.timezone)}
        />
        <Label
          name="WiSunset"
          text={toLocalTime(weather.sunset, weather.timezone)}
        />
        {/* <div>
                  <pre>{JSON.stringify(weather, null, 2)}</pre>
                  </div> */}
      </GridDiv>
    </GridContainer>
  );
};
