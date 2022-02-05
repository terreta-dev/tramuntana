import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Coordinates } from "../../common/api/interfaces/coordinates";
import { Weather } from "../../common/api/interfaces/weather";

interface CurrentWeatherState {
  weather: Weather | undefined;
}

const initialState: CurrentWeatherState = {
  weather: undefined,
};

export const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {
    changeWeather: (
      state: CurrentWeatherState,
      action: PayloadAction<Weather>
    ) => {
      state.weather = action.payload;
    },
  },
});

export const selectWeather = (state: RootState) => state.currentWeather.weather;

export const selectCoordinates = (state: RootState): Coordinates | undefined =>
  state.currentWeather.weather?.coordinates;

export const { changeWeather } = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;
