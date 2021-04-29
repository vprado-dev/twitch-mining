import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import FarmButton from './components/FarmButton';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FarmButton />
      </header>
    </div>
  );
};

export default App;
