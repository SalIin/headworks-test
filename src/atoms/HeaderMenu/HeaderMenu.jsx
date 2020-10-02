import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MobileMenu } from "../../components/MobileMenu";
import { AppRoutes } from "../../routes/AppRoutes";

export const HeaderMenu = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const handleBurgerClick = () => {
    setMenuVisibility((prevState) => !prevState);
  };
  return (
    <>
      <ul className="header__links d-none d-sm-flex">
        <li>
          <Link to={AppRoutes.Clients}>Clients</Link>
        </li>
        <li>
          <Link to={AppRoutes.Register}>Register</Link>
        </li>
        <li>
          <Link to={AppRoutes.About}>About</Link>
        </li>
      </ul>
      <div className="header__burger d-sm-none">
        {menuVisibility ? (
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={handleBurgerClick}
          />
        ) : (
          <i
            className="fa fa-bars burger"
            aria-hidden="true"
            onClick={handleBurgerClick}
          />
        )}
      </div>
      {menuVisibility && <MobileMenu handleLinkClick={handleBurgerClick} />}
    </>
  );
};
