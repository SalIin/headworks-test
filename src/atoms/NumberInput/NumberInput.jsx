import React, { useMemo } from "react";

export const NumberInput = ({ value, error, handleBlur, handleChange }) => {
  let inputClasses = "form-control";
  const hasError = useMemo(() => error, [error]);
  if (hasError) {
    inputClasses = "form-control error";
  }
  return (
    <>
      <label htmlFor="card" className="mt-3">
        Card
      </label>
      <input
        name="card"
        type="text"
        className={inputClasses}
        placeholder="Enter your card number"
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {hasError && (
        <div className="signup-form__error">
          <small>{error}</small>
        </div>
      )}
    </>
  );
};
