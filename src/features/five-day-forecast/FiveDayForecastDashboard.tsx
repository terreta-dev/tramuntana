import styled from "@emotion/styled";
import { useAppSelector } from "../../app/hooks";
import { selectForecast } from "./fiveDayForecastSlice";
import ForecastCard from "./ForecastCard";
import LineChart from "./LineChart";
import { toChartData } from "./utils/to-chart-data";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
  height: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: start;
`;

const ChartContainer = styled.div`
  min-height: 350px;
  height: 0.5vh;
  width: auto;
`;

const FiveDayForecastDashboard = () => {
  const fiveDayForecast = useAppSelector(selectForecast);
  return (
    <>
      {!!fiveDayForecast ? (
        <DashboardContainer>
          <CardContainer>
            {fiveDayForecast.forecasts.slice(1, 6).map((f, i) => (
              <ForecastCard
                key={i}
                data={f}
                timezone={fiveDayForecast.timezone}
              />
            ))}
          </CardContainer>
          <ChartContainer>
            <LineChart
              data={toChartData({
                ...fiveDayForecast,
                forecasts: fiveDayForecast.forecasts.slice(1, 6),
              })}
            />
          </ChartContainer>
        </DashboardContainer>
      ) : (
        <div>Please, search for forecasts</div>
      )}
    </>
  );
};

export default FiveDayForecastDashboard;
