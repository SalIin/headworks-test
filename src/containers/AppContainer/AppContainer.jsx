import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AboutPage } from "../../pages/AboutPage";
import { ClientsPage } from "../../pages/ClientsPage";
import { HomePage } from "../../pages/HomePage";
import { RegisterPage } from "../../pages/RegisterPage";
import { AppRoutes } from "../../routes/AppRoutes";

export const AppContainer = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoutes.About}>
          <AboutPage />
        </Route>
        <Route path={AppRoutes.Register}>
          <RegisterPage />
        </Route>
        <Route path={AppRoutes.Clients}>
          <ClientsPage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
