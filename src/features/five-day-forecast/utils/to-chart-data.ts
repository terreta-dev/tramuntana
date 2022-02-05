import { FiveDayForecast } from "../../../common/api/interfaces/five-day-forecast";
import { toCalendarDate } from "../../../common/utils/to-locale-time";
import { DataPoint, LineChartData } from "../LineChart";

const roundToDecimal = (value: number): number => {
  console.log(Math.round(value * 10));
  return Math.round(value * 10) / 10;
};

export const toChartData = (
  fiveDayForecast: FiveDayForecast
): LineChartData[] => {
  const { timezone, forecasts } = fiveDayForecast;
  return forecasts.reduce((acc, f) => {
    const forecastDay = toCalendarDate(f.time, timezone);
    addData(acc, "Max temperature", {
      x: forecastDay,
      y: roundToDecimal(f.temperature.real.max),
    });
    addData(acc, "Min temperature", {
      x: forecastDay,
      y: roundToDecimal(f.temperature.real.min),
    });
    addData(acc, "Feels like day", {
      x: forecastDay,
      y: roundToDecimal(f.temperature.feelsLike.day),
    });
    addData(acc, "Feels like night", {
      x: forecastDay,
      y: roundToDecimal(f.temperature.feelsLike.night),
    });
    return acc;
  }, initialChartData());
};

const addData = (data: LineChartData[], id: string, point: DataPoint) => {
  const serie = data.find((d) => d.id === id);
  if (!!serie) {
    serie.data.push(point);
  }
};

const initialChartData = (): LineChartData[] => {
  return [
    {
      id: "Max temperature",
      color: "hsl(194, 70%, 50%)",
      data: [],
    },
    {
      id: "Min temperature",
      color: "hsl(5, 70%, 50%)",
      data: [],
    },
    {
      id: "Feels like day",
      color: "#FF5733",
      data: [],
    },
    {
      id: "Feels like night",
      color: "#581845",
      data: [],
    },
  ];
};
