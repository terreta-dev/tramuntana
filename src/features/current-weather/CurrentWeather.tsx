import styled from "@emotion/styled";
import { useAppSelector } from "../../app/hooks";
import { selectWeather } from "./currentWeatherSlice";
import WeatherIconLabel from "../../common/components/WeatherIconLabel";
import { toLocalTime } from "../../common/utils/to-locale-time";
import WeatherIcon, {
  getWeatherIcon,
} from "../../common/components/icon/WeatherIcon";

interface RowProps {
  flex?: string;
}

const Row = styled.div<RowProps>`
  flex: ${(props) => (props.flex ? props.flex : 1)};
  display: flex;
  justify-content: space-around;
`;

interface TextLabelProps {
  fontSize?: string;
}

const TextLabel = styled.span<TextLabelProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1em")};
`;

const CurrentWeather = () => {
  const weather = useAppSelector(selectWeather);
  return (
    <>
      {!!weather && (
        <>
          <Row>
            <TextLabel fontSize="4em">
              <WeatherIcon
                name={getWeatherIcon(weather.weatherConditions[0].icon)}
                size="3em"
              />
            </TextLabel>
          </Row>
          <Row>
            <TextLabel fontSize="1em">
              {`${weather.weatherConditions[0].description}`}
            </TextLabel>
          </Row>
          <Row>
            <TextLabel fontSize="2em">
              {`${weather.name}, ${weather.country}`}
            </TextLabel>
          </Row>
          <Row>
            <TextLabel fontSize="4em">
              {`${Math.round(weather.weatherParameters.temperature)} ºC`}
            </TextLabel>
          </Row>
          <Row>
            <TextLabel>
              {`Feels like: ${Math.round(
                weather.weatherParameters.feelsLike
              )} ºC`}
            </TextLabel>
          </Row>
          <Row>
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
          </Row>
          <Row>
            <WeatherIconLabel
              name="WiSunrise"
              text={toLocalTime(weather.sunrise, weather.timezone)}
              unit="h"
            />
            <WeatherIconLabel
              name="WiSunset"
              text={toLocalTime(weather.sunset, weather.timezone)}
              unit="h"
            />
          </Row>
          <Row>
            <WeatherIconLabel
              name="WiCloudy"
              text={weather.weatherParameters.cloudiness || 0}
              unit="%"
            />
            {weather.weatherParameters.rainInLastHour && (
              <WeatherIconLabel
                name="WiRaindrops"
                text={weather.weatherParameters.rainInLastHour}
                unit="h"
              />
            )}
            {weather.weatherParameters.snowInLastHour && (
              <WeatherIconLabel
                name="WiSnow"
                text={weather.weatherParameters.snowInLastHour}
                unit="h"
              />
            )}
          </Row>
          <Row>
            <WeatherIconLabel
              name="WiWindDeg"
              text={weather.weatherParameters.windDirection}
              unit="º"
            />
            <WeatherIconLabel
              name="WiStrongWind"
              text={weather.weatherParameters.windSpeed}
              unit="m/s"
            />
          </Row>
        </>
      )}
    </>
  );
};

export default CurrentWeather;
