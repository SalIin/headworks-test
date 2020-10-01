import { API_URL } from "../../constants/constants";

export async function getJoke() {
  try {
    const response = await fetch(API_URL);
    const body = await response.json();

    return body.value;
  } catch (e) {
    console.error(e);
  }
}
