import { createContext, ReactNode, useContext, useReducer } from "react";

export enum ActionType {
  SET_APP_ID = "setAppId",
  SET_CITY = "setCity",
}
export type Action = { type: ActionType; payload: string };

type Dispatch = (action: Action) => void;

interface State {
  city: string;
  appId: string;
}

type AppProviderProps = { children: ReactNode };

const AppStateContext = createContext<State | undefined>(undefined);

const AppDispatchContext = createContext<Dispatch | undefined>(undefined);

const appContextReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.SET_APP_ID: {
      return { ...state, appId: action.payload };
    }
    case ActionType.SET_CITY: {
      return { ...state, city: action.payload };
    }
    default: {
      throw new Error(`Unhandled action: ${action}`);
    }
  }
};

const AppContextProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(appContextReducer, {
    appId: "",
    city: "",
  });
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useState must be used within a AppContextProvider");
  }
  return context;
};

const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useDispatch must be used within a AppContextProvider");
  }
  return context;
};

export { AppContextProvider, useAppState, useAppDispatch };
