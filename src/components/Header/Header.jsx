import React from "react";
import { Link } from "react-router-dom";
import { HeaderMenu } from "../../atoms/HeaderMenu";
import { HW_LOGO } from "../../constants/constants";
import "./header.scss";

export const Header = () => {
  return (
    <div className="header container-fluid">
      <Link to="/">
        <img src={HW_LOGO} alt="Headworks Logo" className="header__logo" />
      </Link>
      <HeaderMenu />
    </div>
  );
};
