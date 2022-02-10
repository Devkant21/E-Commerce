import React from 'react';
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM
    <Router>
      <div className='app'>
        <Header />
        <Home />
      </div>
    </Router>
  )
}

export default App