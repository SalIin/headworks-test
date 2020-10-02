import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../routes/AppRoutes";

export const MobileMenu = ({ handleLinkClick }) => {
  return (
    <div className="header__mobile-menu mobile-menu d-sm-none">
      <ul className="mobile-menu__links">
        <li>
          <Link to={AppRoutes.Clients} onClick={handleLinkClick}>
            Clients
          </Link>
        </li>
        <li>
          <Link to={AppRoutes.Register} onClick={handleLinkClick}>
            Register
          </Link>
        </li>
        <li>
          <Link to={AppRoutes.About} onClick={handleLinkClick}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};
