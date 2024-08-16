import logo from './image.png';
import './App.css';
import {useEffect, useState} from "react";
import MessageHolder from "./messageHolder";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <MessageHolder/>
            <div>
              <span>Repository: </span>
              <a href="https://github.com/hoholyin/nus-iss-container-scaling/">
                https://github.com/hoholyin/nus-iss-container-scaling/
              </a>
            </div>
        </header>
      </div>
  );
}

export default App;
