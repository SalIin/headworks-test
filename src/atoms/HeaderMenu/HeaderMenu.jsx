import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../routes/AppRoutes";

export const HeaderMenu = () => {
  return (
    <ul className="header__links">
      <li>
        <Link to={AppRoutes.Clients}>Clients</Link>
        <Link to={AppRoutes.Register}>Register</Link>
        <Link to={AppRoutes.About}>About</Link>
      </li>
    </ul>
  );
};
