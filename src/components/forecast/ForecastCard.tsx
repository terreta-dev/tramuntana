import styled from "@emotion/styled";
import React from "react";
import { Forecast } from "../../api/interfaces/forecast";
import { toCalendarDate, toLocalTime } from "../../utils/to-locale-time";
import WeatherIcon, { getWeatherIcon } from "../icon/WeatherIcon";
import Label from "../weather/Label";

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

interface ForecastCardProps {
  forecast: Forecast;
}

export const ForecastCard: React.FC<ForecastCardProps> = ({
  forecast,
}: ForecastCardProps) => {
  return (
    <>
      <GridContainer>
        <GridDiv zone="icon">
          <WeatherIcon
            name={getWeatherIcon(forecast.weatherConditions[0].icon)}
            size="6em"
          />
        </GridDiv>
        <GridDiv zone="temperature">
          <Label
            name="WiThermometer"
            text={forecast.weatherParameters.temperature}
            unit="ºC"
          />
          <Label
            name="WiDirectionUp"
            text={forecast.weatherParameters.maxTemperature}
            unit="ºC"
          />
          <Label
            name="WiDirectionDown"
            text={forecast.weatherParameters.minTemperature}
            unit="ºC"
          />
        </GridDiv>
        <GridDiv zone="vars1">
          <Label
            name="WiBarometer"
            text={forecast.weatherParameters.pressure}
            unit="hPa"
          />
          <Label
            name="WiHumidity"
            text={forecast.weatherParameters.humidity}
            unit="%"
          />
        </GridDiv>
        <GridDiv zone="vars2">
          <Label
            name="WiTime12"
            text={toCalendarDate(forecast.time, undefined)}
            unit=""
          />
          <Label
            name="WiTime1"
            text={toLocalTime(forecast.time, undefined)}
            unit="h"
          />
        </GridDiv>
      </GridContainer>
    </>
  );
};
