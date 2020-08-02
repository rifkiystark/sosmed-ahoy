import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/register/RegisterPage";
import ProfilePage from "./pages/profile/ProfilePage";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/me" component={ProfilePage} />
      </Switch>
    </Router>
  );
}
