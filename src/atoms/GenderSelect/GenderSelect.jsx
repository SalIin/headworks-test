import React from "react";
import Select from "react-select";

export const GenderSelect = ({ optionGender, setFieldValue, gender }) => {
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
    <>
      <label htmlFor="gender">Gender</label>
      <Select
        name="gender"
        className="signup-form__gender mb-3"
        placeholder="Gender"
        options={optionGender}
        isSearchable
        theme={customTheme}
        styles={customStyle}
        onChange={(value) => setFieldValue("gender", value)}
        value={gender}
      />
    </>
  );
};
