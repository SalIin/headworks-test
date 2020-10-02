import React from "react";
import { Link } from "react-router-dom";

export const AddClientButton = () => {
  return (
    <div className="clients-page__button col-lg-6">
      <Link to="/register">Sign Up</Link>
    </div>
  );
};
