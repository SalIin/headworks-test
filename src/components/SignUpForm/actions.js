import {
  ADD_CLIENT,
  LOAD_JOKE,
  PUT_JOKE,
} from "../../redux/action-types/action-types";

export function addClient(client) {
  return { type: ADD_CLIENT, payload: client };
}
export function loadJoke() {
  return { type: LOAD_JOKE };
}
export function putJoke(joke) {
  return { type: PUT_JOKE, payload: joke };
}
