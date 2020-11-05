import React, { useState, useEffect } from 'react';
import Routes from "./Routes";
import './App.css';
import NavBar from "./NavBar";
import YodlrAPI from './YodlrAPI';
import UserContext from "./UserContext";

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes/>
    </div>
  );
}

export default App;

