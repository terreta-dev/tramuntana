import { Weather } from "../interfaces/weather";
import { genericParse } from "./generic.parser";

export const currentWeatherFieldMap = {
  "coord.lon": "coordinates.longitude",
  "coord.lat": "coordinates.latitude",
  weather: "weatherConditions",
  "main.temp": "weatherParameters.temperature",
  "main.pressure": "weatherParameters.pressure",
  "main.humidity": "weatherParameters.humidity",
  "main.temp_min": "weatherParameters.minTemperature",
  "main.temp_max": "weatherParameters.maxTemperature",
  "main.sea_level": "weatherParameters.pressureAtSeaLevel",
  "main.grnd_level": "weatherParameters.pressureAtGroundLevel",
  visibility: "visibility",
  "wind.speed": "weatherParameters.windSpeed",
  "wind.deg": "weatherParameters.windDirection",
  "clouds.all": "weatherParameters.cloudiness",
  "rain.1h": "weatherParameters.rainInLastHour",
  "rain.3h": "weatherParameters.rainInLastThreeHours",
  "snow.1h": "weatherParameters.snowInLastHour",
  "snow.3h": "weatherParameters.snowInLastThreeHours",
  name: "name",
  dt: "time",
  timezone: "timezone",
  "sys.sunrise": "sunrise",
  "sys.sunset": "sunset",
  "sys.country": "country"
};

export const parseCurrentWeather = (apiJson: Object): Weather =>
  genericParse<Weather>(apiJson, currentWeatherFieldMap);
