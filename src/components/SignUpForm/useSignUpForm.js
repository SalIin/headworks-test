export const useSignUpForm = (values, setFieldError, handleSubmit) => {
  const optionLoyalty = [
    { value: "unreachable", label: "Unreachable" },
    { value: "card", label: "Card" },
    { value: "mobile", label: "Mobile app" },
  ];
  function handleFormSubmition(e) {
    e.preventDefault();
    if (values.loyalty.value === "card" && values.card === "") {
      setFieldError("card", "This is required field");
    } else if (values.loyalty.value === "card" && values.card.length > 0) {
      handleSubmit();
    } else if (values.loyalty.value !== "card") {
      delete values.card;
      handleSubmit();
    }
  }
  const needCardInput = values.loyalty.value === "card" ? true : false;

  return { optionLoyalty, handleFormSubmition, needCardInput };
};
