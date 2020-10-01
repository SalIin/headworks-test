import React, { useMemo } from "react";

export const TextInput = ({
  label,
  name,
  placeholder,
  handleChange,
  value,
  handleBlur,
  error,
  touched,
}) => {
  let inputClasses = "signup-form__name form-control mb-3";
  const hasError = useMemo(() => error && touched, [error, touched]);
  if (hasError) {
    inputClasses = "signup-form__name form-control error mb-3";
  }

  return (
    <>
      <label htmlFor="name">{label}</label>
      <input
        name={name}
        type="text"
        className={inputClasses}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        onBlur={handleBlur}
      />
      {hasError && (
        <div className="signup-form__error mb-3">
          <small>{error}</small>
        </div>
      )}
    </>
  );
};
