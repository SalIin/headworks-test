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
    resetForm({
      values: {
        name: "",
        surname: "",
        loyalty: { value: "unreachable", label: "Unreachable" },
        card: "",
      },
    });
  },
};
