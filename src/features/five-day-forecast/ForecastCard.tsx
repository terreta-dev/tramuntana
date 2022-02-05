import styled from "@emotion/styled";
import { Forecast } from "../../common/api/interfaces/forecast";
import WeatherIcon, {
  getWeatherIcon,
} from "../../common/components/icon/WeatherIcon";
import WeatherIconLabel from "../../common/components/WeatherIconLabel";
import { toLocalTime, toWeekDay } from "../../common/utils/to-locale-time";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.secondaryBackground};
  border-radius: 10px;
  padding: 5px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

interface ForecastCardProps {
  data: Forecast;
  timezone: number;
}

const ForecastCard = ({ data, timezone }: ForecastCardProps) => {
  return (
    <Container>
      <Row>
        <span>{toWeekDay(data.time, timezone)}</span>
      </Row>
      <Row>
        <WeatherIcon
          name={getWeatherIcon(data.weatherConditions[0].icon)}
          size="4em"
        />
      </Row>
      <Row>
        <WeatherIconLabel name="WiBarometer" text={data.pressure} unit="hPa" />
        <WeatherIconLabel name="WiHumidity" text={data.humidity} unit="%" />
      </Row>
      <Row>
        <WeatherIconLabel
          name="WiSunrise"
          text={toLocalTime(data.sunrise, timezone)}
        />
        <WeatherIconLabel
          name="WiSunset"
          text={toLocalTime(data.sunset, timezone)}
        />
      </Row>
    </Container>
  );
};

export default ForecastCard;
