import React from 'react';
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';

function App() {
  return (
    //BEM
    <Router>
      <div className='app'>
        <Switch>

          <Route path="/checkout">
            <Header />
                <h1>Checkout Page</h1>
            <Home />
          </Route>
        
        </Switch>
        
      </div>
    </Router>
  )
}

export default App;