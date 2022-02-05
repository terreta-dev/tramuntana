import { FiveDayForecast } from "../interfaces/five-day-forecast";
import { SearchParameters } from "../interfaces/search-parameters";
import { get } from "./base";
import { parseFiveDayForecast } from "../parsers/five-day-forecast.parser";

export const getFiveDayForecast = async (
  params: SearchParameters
): Promise<FiveDayForecast> => {
  const data = await get<FiveDayForecast>("onecall", {
    params: {
      units: "metric",
      exclude: "current,minutely,hourly,alerts",
      ...params,
    },
  });
  return parseFiveDayForecast(data);
};
