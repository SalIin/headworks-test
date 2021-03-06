import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadJoke } from "../action-creators/actions";
import { getJoke, getLoadingStatus } from "../selectors/selectors";

export const useSignUpForm = (values, setFieldError, handleSubmit) => {
  const dispatch = useDispatch();
  const joke = useSelector(getJoke);
  const loading = useSelector(getLoadingStatus);
  useEffect(() => {
    dispatch(loadJoke());
  }, []); // eslint-disable-line
  const optionLoyalty = [
    { value: "unreachable", label: "Unreachable" },
    { value: "card", label: "Card" },
    { value: "mobile", label: "Mobile app" },
  ];
  const optionGender = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  function handleFormSubmition(e) {
    e.preventDefault();
    if (!Object.keys(values).includes("card")) {
      values.card = "";
    }
    if (values.loyalty.value === "card" && values.card === "") {
      setFieldError("card", "This is required field");
    } else if (values.loyalty.value === "card" && values.card.length > 0) {
      values.created = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
      handleSubmit();
    } else if (values.loyalty.value !== "card") {
      values.created = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
      delete values.card;
      handleSubmit();
    }
  }
  const needCardInput = values.loyalty.value === "card" ? true : false;

  return {
    optionLoyalty,
    optionGender,
    handleFormSubmition,
    needCardInput,
    joke,
    loading,
  };
};
