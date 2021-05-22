import React from 'react';
import './App.css';
import { AppContextProvider } from '../../contexts/appContext';
import { Home } from '../../components/home/Home';
import { Grommet, Box } from 'grommet';
import { theme } from '../../styles/theme';

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <Grommet theme={theme} full>
        <Box fill>
          <Home />
        </Box>
      </Grommet>
    </AppContextProvider>
  );
};

export default App;
