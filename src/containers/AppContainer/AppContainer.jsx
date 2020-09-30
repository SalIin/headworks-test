import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ClientsPage } from "../../pages/ClientsPage";
import { HomePage } from "../../pages/HomePage";
import { AppRoutes } from "../../routes/AppRoutes";

export const AppContainer = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoutes.Register}>{/* <RegisterPage /> */}</Route>
        <Route path={AppRoutes.Clients}>
          <ClientsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
