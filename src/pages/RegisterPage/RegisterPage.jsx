import React from "react";
import { Header } from "../../components/Header";
import { SignUpForm } from "../../components/SignUpForm";

export const RegisterPage = () => {
  return (
    <div className="register-page">
      <Header />
      <div className="container-fluid">
        <h1 className="register-page__title pt-3">Sign up</h1>
        <div className="row">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};
