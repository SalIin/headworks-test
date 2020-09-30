import React from "react";
import { ClientsList } from "../../components/ClientsList/ClientsList";
import { Header } from "../../components/Header";
import "./clients-page.scss";

export const ClientsPage = () => {
  return (
    <div className="clients-page">
      <Header />
      <div className="container-fluid pt-3">
        <h1>Clients list</h1>
        <div className="row">
          <ClientsList />
        </div>
      </div>
    </div>
  );
};
