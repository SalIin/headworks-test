import {
  ADD_CLIENT,
  SHOW_SUCCESS_ALERT,
} from "../../redux/action-types/action-types";

export function addClient(client) {
  return { type: ADD_CLIENT, payload: client };
}
