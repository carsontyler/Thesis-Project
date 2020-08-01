import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage"
import RecipeRater from "./views/RecipeRater/RecipeRater"
import Disclosure from "./views/Disclosure/Disclosure"
import ThankYou from "./views/ThankYou/ThankYou"
import { createBrowserHistory } from "history";
import "./styles.css"

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
      <Switch> 
        <Route path="/" render={props => <HomePage />} />
        <Route path="/recipe/:group/:id" render={props => <RecipeRater />} />
        <Route path="/disclosure" render={props => <Disclosure />} />
        <Route path="/thankyou" render={props => <ThankYou />} />
      </Switch>
    </Router>,
  document.getElementById("root")
);