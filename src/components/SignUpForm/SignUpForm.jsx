import React, { useState } from "react";
import { LoyaltySelect } from "../../atoms/LoyaltySelect/LoyaltySelect";

export const SignUpForm = () => {
  const [loyalty, setLoyalty] = useState({
    value: "unreachable",
    label: "Unreachable",
  });
  const optionLoyalty = [
    { value: "unreachable", label: "Unreachable" },
    { value: "card", label: "Card" },
    { value: "mobile", label: "Mobile app" },
  ];
  return (
    <form className="jumbotron col-lg-6 signup-form">
      <label htmlFor="name">Name</label>
      <input
        name="name"
        type="text"
        className="signup-form__name form-control mb-3"
        placeholder="Enter your name"
      />
      <label htmlFor="surname">Surname</label>
      <input
        name="surname"
        type="text"
        className="signup-form__surname form-control mb-3"
        placeholder="Enter your surname"
      />
      <label htmlFor="loyalty">Loyalty</label>
      <LoyaltySelect
        name="loyalty"
        optionLoyalty={optionLoyalty}
        setLoyalty={setLoyalty}
        loyalty={loyalty}
      />
    </form>
  );
};
