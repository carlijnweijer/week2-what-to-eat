import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import RecipePage from "./components/RecipePage";
import "./style/global.scss";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact to="/" component={Homepage} />
        <Route to="/recipes" component={RecipePage} />
      </Switch>
    </div>
  );
}

export default App;
