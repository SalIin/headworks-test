import React from "react";
import { Loader } from "../Loader/Loader";

export const JokeBlock = ({ loading, joke }) => {
  return (
    <div className="signup-form__joke mt-3">
      {loading ? <Loader /> : <small>{joke}</small>}
    </div>
  );
};
