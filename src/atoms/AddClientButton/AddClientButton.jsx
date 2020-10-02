import React from "react";
import { Link } from "react-router-dom";

export const AddClientButton = () => {
  return (
    <div className="clients-page__button col-md-6 col-sm-12">
      <Link to="/register">Sign Up</Link>
    </div>
  );
};
