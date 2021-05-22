import * as React from 'react';

type Action = { type: string; payload: string };
type Dispatch = (action: Action) => void;
interface State {
  cityName: string;
  appId: string;
}
type AppProviderProps = { children: React.ReactNode };

const AppStateContext = React.createContext<State | undefined>(undefined);
const AppDispatchContext = React.createContext<Dispatch | undefined>(undefined);

const appContextReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'setAppId': {
      return { ...state, appId: action.payload };
    }
    case 'setCityName': {
      return { ...state, cityName: action.payload };
    }
    default: {
      throw new Error(`Unhandled action: ${action}`);
    }
  }
};

const AppContextProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = React.useReducer(appContextReducer, {
    appId: process.env.REACT_APP_OPENWEATHER_KEY || '',
    cityName: '',
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
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useState must be used within a AppContextProvider');
  }
  return context;
};

const useAppDispatch = () => {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useDispatch must be used within a AppContextProvider');
  }
  return context;
};

export { AppContextProvider, useAppState, useAppDispatch };
