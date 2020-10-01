import * as Yup from "yup";

export const signUpValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be 2 or more characters")
    .max(16, "Name must be less than 16 characters")
    .required("This field is required"),
  surname: Yup.string()
    .min(2, "Name must be 2 or more characters")
    .max(16, "Name must be less than 16 characters")
    .required("This field is required"),
  loyalty: Yup.object().shape({
    value: Yup.string().required("This field is required"),
  }),
});
