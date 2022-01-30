import { configureStore } from "@reduxjs/toolkit";
import apiDataReducer from "../features/api-data/apiDataSlice";
import currentWeatherReducer from "../features/current-weather/currentWeatherSlice";
import { localStorageMiddleware } from "./local-storage.middleware";

const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
    apiData: apiDataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
