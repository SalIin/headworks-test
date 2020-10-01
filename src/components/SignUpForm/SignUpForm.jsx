import React from "react";
import { LoyaltySelect } from "../../atoms/LoyaltySelect/LoyaltySelect";
import { useFormik } from "formik";
import { signupSchema } from "./signup.schema";
import { TextInput } from "../../atoms/TextInput/TextInput";
import "./signup-form.scss";

export const SignUpForm = () => {
  const optionLoyalty = [
    { value: "unreachable", label: "Unreachable" },
    { value: "card", label: "Card" },
    { value: "mobile", label: "Mobile app" },
  ];
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik(signupSchema);
  return (
    <form className="jumbotron col-lg-6 signup-form" onSubmit={handleSubmit}>
      <TextInput
        label="Name"
        name="name"
        placeholder="Enter your name"
        handleChange={handleChange}
        value={values.name}
        handleBlur={handleBlur}
        error={errors.name}
        touched={touched.name}
      />
      <TextInput
        label="Surname"
        name="surname"
        placeholder="Enter your surname"
        handleChange={handleChange}
        value={values.surname}
        handleBlur={handleBlur}
        error={errors.surname}
        touched={touched.surname}
      />
      <label htmlFor="loyalty">Loyalty</label>
      <LoyaltySelect
        name="loyalty"
        optionLoyalty={optionLoyalty}
        setFieldValue={setFieldValue}
        loyalty={values.loyalty}
      />
      <button type="submit" className="btn btn-success mt-3 w-25">
        Save
      </button>
    </form>
  );
};
