import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { FiveDayForecast } from "../../common/api/interfaces/five-day-forecast";

interface FiveDayForecastState {
  forecast: FiveDayForecast | undefined;
}

const initialState: FiveDayForecastState = {
  forecast: undefined,
};

export const fiveDayForecastSlice = createSlice({
  name: "fiveDayForecast",
  initialState,
  reducers: {
    changeForecast: (
      state: FiveDayForecastState,
      action: PayloadAction<FiveDayForecast>
    ) => {
      state.forecast = action.payload;
    },
  },
});

export const selectForecast = (state: RootState) =>
  state.fiveDayForecast.forecast;

export const { changeForecast } = fiveDayForecastSlice.actions;

export default fiveDayForecastSlice.reducer;
