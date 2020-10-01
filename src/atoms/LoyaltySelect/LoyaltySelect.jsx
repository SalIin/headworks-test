import React from "react";
import Select from "react-select";

export const LoyaltySelect = ({ optionLoyalty, setLoyalty, loyalty }) => {
  function customTheme(theme) {
    return {
      ...theme,
      colors: { ...theme.colors, primary: "#7197be" },
    };
  }
  const customStyle = {
    option: (base) => ({
      ...base,
      color: "#333",
    }),
  };
  return (
    <Select
      name="loyalty"
      className="signup-form__loyalty"
      placeholder="Loyalty program"
      options={optionLoyalty}
      isSearchable
      theme={customTheme}
      styles={customStyle}
      onChange={setLoyalty}
      value={loyalty}
    />
  );
};
