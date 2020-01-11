import React from 'react';
import './App.css';

import { AppContextProvider } from '../../contexts/appContext';
import { Home } from '../../components/home/home';

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <div className="App">
        <Home />
      </div>
    </AppContextProvider>
  );
};

export default App;
