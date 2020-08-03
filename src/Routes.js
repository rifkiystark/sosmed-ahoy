import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/register/RegisterPage";
import ProfilePage from "./pages/profile/ProfilePage";
import { GuardProvider, GuardedRoute } from "react-router-guards";

import { requireLogin, isLoggedIn } from "./Helper";

export default function Routes() {
  return (
    <Router>
      <GuardProvider guards={[requireLogin]}>
        <Switch>
          <GuardedRoute
            exact
            path="/"
            component={HomePage}
            meta={{ auth: true }}
          />
          <GuardedRoute path="/login" component={LoginPage} />
          <GuardedRoute path="/register" component={RegisterPage} />
          <GuardedRoute
            path="/me"
            component={ProfilePage}
            meta={{ auth: true }}
          />
        </Switch>
      </GuardProvider>
    </Router>
  );
}
