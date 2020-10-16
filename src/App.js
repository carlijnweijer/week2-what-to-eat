import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import RecipePage from "./components/RecipePage";
import "./style/global.scss";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact to="/" component={Homepage} />
        <Route to="/recipes" component={RecipePage} />
      </Switch>
    </div>
  );
}

export default App;
