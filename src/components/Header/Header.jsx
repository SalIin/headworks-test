import React from "react";
import { HW_LOGO } from "../../constants/constants";
import "./header.scss";

export const Header = () => {
  return (
    <div className="header container-fluid">
      <img src={HW_LOGO} alt="Headworks Logo" className="header__logo" />
    </div>
  );
};
