import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/hompage.component";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => <h1>Hats PAge</h1>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
