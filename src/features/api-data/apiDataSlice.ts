import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface ApiDataState {
  city: string;
  apiKey: string;
}

const initialState: ApiDataState = {
  city: "",
  apiKey: "",
};

export const apiDataSlice = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    changeCity: (state: ApiDataState, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    changeApiKey: (state: ApiDataState, action: PayloadAction<string>) => {
      state.apiKey = action.payload;
    },
    resetCity: (state: ApiDataState) => {
      state.city = "";
    },
    resetApiKey: (state: ApiDataState) => {
      state.apiKey = "";
    },
  },
});

export const selectApiKey = (state: RootState) => state.apiData.apiKey;
export const selectCity = (state: RootState) => state.apiData.city;

export const { changeCity, changeApiKey, resetCity, resetApiKey } =
  apiDataSlice.actions;

export default apiDataSlice.reducer;
