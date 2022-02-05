import { configureStore } from "@reduxjs/toolkit";
import apiDataReducer from "../features/api-data/apiDataSlice";
import currentWeatherReducer from "../features/current-weather/currentWeatherSlice";
import fiveDayForecastReducer from "../features/five-day-forecast/fiveDayForecastSlice";
import { localStorageMiddleware } from "./local-storage.middleware";

const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
    apiData: apiDataReducer,
    fiveDayForecast: fiveDayForecastReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
