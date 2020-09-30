import React from "react";
import { Header } from "../../components/Header";
import "./clients-page.scss";

export const ClientsPage = () => {
  return (
    <div className="clients-page">
      <Header />
      <div className="container-fluid pt-3">
        <h1>Clients list</h1>
        <div className="row">
          <ul className="list-group clients-page__list col-lg-6">
            <li className="list-group-item d-flex align-items-center">
              <span>Cras justo odio • 2020/01/15</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
