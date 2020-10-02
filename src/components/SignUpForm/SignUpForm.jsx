import React from "react";
import { LoyaltySelect } from "../../atoms/LoyaltySelect";
import { useFormik } from "formik";
import { TextInput } from "../../atoms/TextInput/TextInput";
import { NumberInput } from "../../atoms/NumberInput";
import { useSignUpForm } from "./hooks/useSignUpForm";
import { useSignUpFormSchema } from "./hooks/signup.schema";
import "./signup-form.scss";
import { SubmitButton } from "../../atoms/SubmitButton";
import { JokeBlock } from "../JokeBlock/JokeBlock";

export const SignUpForm = () => {
  const { signupSchema } = useSignUpFormSchema();
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
  const {
    optionLoyalty,
    handleFormSubmition,
    needCardInput,
    joke,
    loading,
  } = useSignUpForm(values, setFieldError, handleSubmit);

  return (
    <form
      className="jumbotron col-md-8 col-lg-6 signup-form"
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
      <SubmitButton />
      <JokeBlock joke={joke} loading={loading} />
    </form>
  );
};
