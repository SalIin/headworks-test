import { signUpValidationSchema } from "../signup.validator";
import { useDispatch } from "react-redux";
import { addClient } from "../action-creators/actions";
import { showSuccessAlert } from "../../../helpers/swal";

export const useSignUpFormSchema = () => {
  const dispatch = useDispatch();
  const signupSchema = {
    initialValues: {
      name: "",
      surname: "",
      gender: { value: "male", label: "Male" },
      loyalty: { value: "unreachable", label: "Unreachable" },
      card: "",
    },
    validateOnMount: false,
    validationSchema: signUpValidationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatch(addClient(values));
      showSuccessAlert();
      resetForm({
        values: {
          name: "",
          surname: "",
          gender: { value: "male", label: "Male" },
          loyalty: { value: "unreachable", label: "Unreachable" },
          card: "",
        },
      });
    },
  };

  return { signupSchema };
};
