import * as React from 'react';

type Action = { type: 'setAppId'; appId: string };
type Dispatch = (action: Action) => void;
type State = { appId: string };
type AppProviderProps = { children: React.ReactNode };

const AppStateContext = React.createContext<State | undefined>(undefined);
const AppDispatchContext = React.createContext<Dispatch | undefined>(undefined);

function appContextReducer(state: State, action: Action) {
  switch (action.type) {
    case 'setAppId': {
      return { appId: action.appId };
    }

    default: {
      throw new Error(`Unhandled action: ${action}`);
    }
  }
}

function AppContextProvider({ children }: AppProviderProps) {
  const [state, dispatch] = React.useReducer(appContextReducer, { appId: '' });
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

function useAppState() {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useState must be used within a AppContextProvider');
  }
  return context;
}

function useAppDispatch() {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useDispatch must be used within a AppContextProvider');
  }
  return context;
}

export { AppContextProvider, useAppState, useAppDispatch };
