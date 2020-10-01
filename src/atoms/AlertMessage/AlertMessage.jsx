import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../routes/AppRoutes";

export const AlertMessage = () => {
  return (
    <div className="alert alert-dismissible alert-info">
      <strong>Clients list is empty!</strong> Try to{" "}
      <Link to={AppRoutes.Register} className="alert-link">
        add new client
      </Link>
      .
    </div>
  );
};
