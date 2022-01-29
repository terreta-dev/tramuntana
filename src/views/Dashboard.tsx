import { FiveDayForecastFetcher } from "../components/forecast/FiveDayForecast";
import WeatherFetcher from "../components/weather/WeatherFetcher";

const Dashboard = () => {
  return (
    <>
      {/* <WeatherFetcher /> */}
      <FiveDayForecastFetcher />
    </>
  );
};

export default Dashboard;
