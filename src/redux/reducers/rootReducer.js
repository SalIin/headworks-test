import { ADD_CLIENT, SHOW_SUCCESS_ALERT } from "../action-types/action-types";

const initialState = {
  clients: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CLIENT:
      return { ...state, clients: [...state.clients, action.payload] };
    default:
      return state;
  }
}
