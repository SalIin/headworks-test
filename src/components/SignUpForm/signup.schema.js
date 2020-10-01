import { signUpValidationSchema } from "./signup.validator";
import { useDispatch } from "react-redux";
import { addClient } from "./actions";
import { showSuccessAlert } from "../../helpers/swal";

export const useSignUpFormSchema = () => {
  const dispatch = useDispatch();
  const signupSchema = {
    initialValues: {
      name: "",
      surname: "",
      loyalty: { value: "unreachable", label: "Unreachable" },
      card: "",
    },
    validateOnMount: false,
    validationSchema: signUpValidationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addClient(values));
      showSuccessAlert();
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

  return { signupSchema };
};
