import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./containers/App.jsx";
import MainPage from "./containers/MainPage";
import HomePage from "./containers/HomePage/index.js";
import SignupComponent from "./containers/SignupComponent/index.js";



export default (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={MainPage} />
    </Route>
    <Route path="/signup" component ={SignupComponent} />
    <Route path="/home" component ={HomePage} />
  </div>
);


