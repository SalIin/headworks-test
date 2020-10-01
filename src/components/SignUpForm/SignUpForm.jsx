import React from "react";
import { LoyaltySelect } from "../../atoms/LoyaltySelect/LoyaltySelect";
import { useFormik } from "formik";
import { signupSchema } from "./signup.schema";
import { TextInput } from "../../atoms/TextInput/TextInput";
import { NumberInput } from "../../atoms/NumberInput/NumberInput";
import "./signup-form.scss";
import { useSignUpForm } from "./useSignUpForm";

export const SignUpForm = () => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
    setFieldError,
    values,
    errors,
    touched,
  } = useFormik(signupSchema);
  const { optionLoyalty, handleFormSubmition, needCardInput } = useSignUpForm(
    values,
    setFieldError,
    handleSubmit
  );
  return (
    <form
      className="jumbotron col-lg-6 signup-form"
      onSubmit={handleFormSubmition}
    >
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
      <LoyaltySelect
        name="loyalty"
        optionLoyalty={optionLoyalty}
        setFieldValue={setFieldValue}
        loyalty={values.loyalty}
      />
      {needCardInput ? (
        <NumberInput
          error={errors.card}
          touched={touched.card}
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.card}
        />
      ) : null}
      <button type="submit" className="btn btn-success mt-3 w-25">
        Save
      </button>
    </form>
  );
};
