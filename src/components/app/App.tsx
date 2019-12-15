import React from 'react';
import './App.css';
import { Home } from '../home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '../header/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
};

export default App;
