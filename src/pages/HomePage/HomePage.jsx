import React from "react";
import { Header } from "../../components/Header";
import "./home-page.scss";

export const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="content-wrapper">
        <h1 className="home-page__title">
          We are glad to see you in our Register App!
        </h1>
        <p className="home-page__subtitle">Happy using</p>
      </div>
    </div>
  );
};
