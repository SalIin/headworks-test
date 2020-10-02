import {
  ADD_CLIENT,
  HIDE_LOADER,
  PUT_JOKE,
  SHOW_LOADER,
} from "../action-types/action-types";

const initialState = {
  clients: [],
  joke: "",
  loading: false,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CLIENT:
      return { ...state, clients: [...state.clients, action.payload] };
    case PUT_JOKE:
      return { ...state, joke: action.payload };
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
}
