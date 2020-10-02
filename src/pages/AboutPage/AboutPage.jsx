import React from "react";
import { Header } from "../../components/Header";
import { InfoBlock } from "../../components/InfoBlock";
import "./about-page.scss";

export const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />
      <div className="container-fluid pt-3">
        <h1>About</h1>
        <InfoBlock />
      </div>
    </div>
  );
};
