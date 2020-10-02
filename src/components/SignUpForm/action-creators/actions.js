import {
  ADD_CLIENT,
  HIDE_LOADER,
  LOAD_JOKE,
  PUT_JOKE,
  SHOW_LOADER,
} from "../../../redux/action-types/action-types";

export function addClient(client) {
  return { type: ADD_CLIENT, payload: client };
}
export function loadJoke() {
  return { type: LOAD_JOKE };
}
export function putJoke(joke) {
  return { type: PUT_JOKE, payload: joke };
}
export function showLoader() {
  return { type: SHOW_LOADER };
}
export function hideLoader() {
  return { type: HIDE_LOADER };
}
