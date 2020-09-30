import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";

export const AuthContainer = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
