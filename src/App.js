import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/HomePage/HomePage.jsx";
import Sports from "./components/SportsPage/SportsPage";
import Theatre from "./components/Theatre/Theatre";
import Concerts from "./components/Concerts/Concerts";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sports">
            <Sports />
          </Route>
          <Route path="/theatre">
            <Theatre />
          </Route>
          <Route path="/concerts">
            <Concerts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
