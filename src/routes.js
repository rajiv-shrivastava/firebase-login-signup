import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./containers/App.jsx";
import MainPage from "./containers/MainPage";
import SignupComponent from "./components/SignupComponent/index.js";
import HomePage from "./containers/HomePage/index.js";


export default (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={MainPage} />
    </Route>
    <Route path="/signup" component ={SignupComponent} />
    <Route path="/home" component ={HomePage} />
  </div>
);


