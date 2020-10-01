import { signUpValidationSchema } from "./signup.validator";

export const signupSchema = {
  initialValues: {
    name: "",
    surname: "",
    loyalty: { value: "unreachable", label: "Unreachable" },
  },
  validateOnMount: false,
  validationSchema: signUpValidationSchema,
  onSubmit: (values) => console.log(values),
};
