import { Weather } from "../interfaces/weather";
import { SearchParameters } from "../interfaces/search-parameters";
import { get } from "./base";
import { parseCurrentWeather } from "../parsers/weather.parser";

export const getWeather = async (
  params: SearchParameters
): Promise<Weather> => {
  const data = await get("weather", { params });
  return parseCurrentWeather(data);
};
