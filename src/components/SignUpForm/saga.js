import { takeEvery, call, put } from "redux-saga/effects";
import { getJoke } from "../../api/requests/norris-api";
import { LOAD_JOKE } from "../../redux/action-types/action-types";
import { putJoke } from "./actions";

function* workerLoadJoke() {
  const joke = yield call(getJoke);
  yield put(putJoke(joke));
}
export function* watchLoadJoke() {
  yield takeEvery(LOAD_JOKE, workerLoadJoke);
}
