import * as React from "react";
import logo from "./logo.svg";
import GlobalStyle from "../src/styles/global";
import "./App.css";
import FarmButton from "./components/FarmButton";

const App = () => {
  return (
    <GlobalStyle>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <FarmButton />
        </header>
      </div>
    </GlobalStyle>
  );
};

export default App;
