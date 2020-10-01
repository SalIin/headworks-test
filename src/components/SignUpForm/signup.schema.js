import { signUpValidationSchema } from "./signup.validator";

export const signupSchema = {
  initialValues: {
    name: "",
    surname: "",
    loyalty: { value: "unreachable", label: "Unreachable" },
    card: "",
  },
  validateOnMount: false,
  validationSchema: signUpValidationSchema,
  onSubmit: (values, { resetForm }) => {
    console.log(values);
    if (!values.card) {
      resetForm({ values: { ...values, card: "" } });
    }
  },
};
