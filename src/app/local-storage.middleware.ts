import { API_KEY } from "../common/constants/localStorage";
import { changeApiKey } from "../features/api-data/apiDataSlice";

export const localStorageMiddleware =
  (store: any) => (next: any) => (action: any) => {
    if (changeApiKey.match(action)) {
      localStorage.setItem(API_KEY, action.payload);
    }
    return next(action);
  };
