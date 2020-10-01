import { ADD_CLIENT, PUT_JOKE } from "../action-types/action-types";

const initialState = {
  clients: [],
  joke: "",
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CLIENT:
      return { ...state, clients: [...state.clients, action.payload] };
    case PUT_JOKE:
      return { ...state, joke: action.payload };
    default:
      return state;
  }
}
