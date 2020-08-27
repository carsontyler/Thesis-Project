import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage"
import { createBrowserHistory } from "history";
import "./styles.css"

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
      <Switch> 
        <Route path="*" render={props => <HomePage />} />
      </Switch>
    </Router>,
  document.getElementById("root")
);