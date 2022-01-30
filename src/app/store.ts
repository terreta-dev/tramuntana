import { configureStore } from "@reduxjs/toolkit";
import apiDataReducer from "../features/api-data/apiDataSlice";
import currentWeatherReducer from "../features/current-weather/currentWeatherSlice";

const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
    apiData: apiDataReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
